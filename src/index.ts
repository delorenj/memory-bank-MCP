#!/usr/bin/env node
import { startServer } from './mcp/memoryBankMcp.js';

// Main function
async function main() {
  // Don't log directly to console here - this breaks MCP JSON protocol
  // Starting server silently
  try {
    // Start MCP server
    await startServer();
  } catch (error) {
    // Log errors to stderr instead of stdout to avoid breaking the protocol
    console.error('Error:', error);
    process.exit(1);
  }
}

// Start the application
main().catch(error => {
  console.error('Critical error:', error);
  process.exit(1);
});
