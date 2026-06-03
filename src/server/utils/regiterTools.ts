import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TTool } from "../types/tool";

export function registerMCPTools(
  server: McpServer,
  tools: readonly TTool<any>[],
) {
  tools.forEach((tool) => {
    server.registerTool(tool.name, tool.config, tool.handler);
  });
}
