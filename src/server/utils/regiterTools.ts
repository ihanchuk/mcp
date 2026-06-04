import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TTool } from "../types/tool";

export function registerMCPTools(
  server: McpServer,
  tools: readonly TTool<any>[],
) {
  tools.forEach(({ name, config, handler }) => {
    server.registerTool(name, config, handler);
  });
}
