const WebSocket = require("ws");
const { spawn } = require("child_process");
const path = require("path");

const wss = new WebSocket.Server({ port: 8008 });

let cliProcess = null;

// Get the script path in the same `webcomponent` directory
const BASE_DIR = path.resolve(__dirname);
const SCRIPT_PATH = path.join(BASE_DIR, "script.js");

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    if (message.toString() === "run") {
      if (cliProcess) {
        ws.send("CLI is already running.");
        console.log("CLI is already running.");
        return;
      }

      cliProcess = spawn("node", [SCRIPT_PATH]);

      ws.send("CLI Started...\n");
      console.log("CLI Started...");

      // Capture stdout (normal console output)
      cliProcess.stdout.on("data", (data) => {
        const output = data.toString();
        console.log(output); // Print to server terminal
        ws.send(output); // Send to WebSocket client
      });

      cliProcess.stderr.on("data", (data) => {
        const output = data.toString();
        
        // Filter out harmless warnings
        if (output.includes("WARN") || output.includes("notice")) {
          console.log("Warning:", output); // Log normally
          ws.send(output); // Send to UI without "ERROR:" prefix
        } else {
          console.error("ERROR:", output); // Print actual errors
          ws.send("ERROR: " + output); // Show in UI as error
        }
      });
      
      cliProcess.on("close", (code) => {
        const exitMsg = `Process exited with code ${code}`;
        console.log(exitMsg); // Print to terminal
        ws.send(exitMsg); // Send to WebSocket UI
        cliProcess = null;
      });
    } 
    
    else if (message.toString() === "close") {
      if (cliProcess) {
        cliProcess.kill();
        cliProcess = null;
        ws.send("CLI Process Terminated.");
        console.log("CLI Process Terminated.");
      } else {
        ws.send("No CLI process is running.");
        console.log("No CLI process is running.");
      }
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    if (cliProcess) {
      cliProcess.kill();
      cliProcess = null;
    }
  });
});

console.log("WebSocket server running on ws://localhost:8008");
console.log(`Listening for WebSocket connections...`);
