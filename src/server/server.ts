import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { FAKE_USERS } from "./stubs/stub";
import { MCP_TOOLS } from "./tools";
import { registerMCPTools } from "./utils/regiterTools";

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

server.registerResource(
  "all-users",
  "users://all",
  {
    title: "get all users",
    mimeType: "application/json",
    description: "Get all users from DB",
  },
  async (uri) => {
    return {
      contents: [
        {
          uri: "users://all",
          text: JSON.stringify(FAKE_USERS, null, 2),
          mimeType: "application/json",
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
