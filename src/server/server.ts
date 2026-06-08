import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { registerMCPResources } from "./utils/registerResources.js";
import { MCP_RESOURCES } from "./resources/index.js";
import { registerToolsV2 } from "./mcp-tools/utils.js";
import { MCP_TOOLS_V2 } from "./mcp-tools/index.js";
import { MCP_PROMPTS_V2 } from "./mcp-prompts/index.js";
import { registerPromptsV2 } from "./mcp-prompts/utils.js";

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

  registerToolsV2(server, MCP_TOOLS_V2);
  registerPromptsV2(server, MCP_PROMPTS_V2);
  registerMCPResources(server, MCP_RESOURCES);

  await server.connect(transport);
  console.log("Running Ok");
}

main();
