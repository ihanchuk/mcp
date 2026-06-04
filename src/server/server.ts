import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { MCP_TOOLS } from "./tools";
import { registerMCPTools } from "./utils/regiterTools";
import { registerMCPResources } from "./utils/registerResources";
import { MCP_RESOURCES } from "./resources";

async function main() {
  const transport = new StdioServerTransport();
  const server = new McpServer(
    {
      name: "User-MCP",
      version: "0.1",
    },
    {
      capabilities: {
        resources: {},
        tools: {},
        prompts: {},
      },
    },
  );

  registerMCPTools(server, MCP_TOOLS);
  registerMCPResources(server, MCP_RESOURCES);

  await server.connect(transport);
}

main();
