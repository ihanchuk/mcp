import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

import { registerMCPResources } from "./utils/registerResources";
import { MCP_RESOURCES } from "./resources";
import { registerToolsV2 } from "./mcp-tools/utils";
import { MCP_TOOLS_V2 } from "./mcp-tools";
import { MCP_PROMPTS_V2 } from "./mcp-prompts";
import { registerPromptsV2 } from "./mcp-prompts/utils";

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
}

main();
