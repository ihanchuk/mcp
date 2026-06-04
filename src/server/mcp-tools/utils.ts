import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { AnyTool } from "./types";

export function registerToolsV2(server: McpServer, tools: readonly AnyTool[]) {
  for (const { name, meta, schema, handler } of tools) {
    server.registerTool(
      name,
      {
        description: meta.description,
        inputSchema: schema,
        annotations: meta.annotations,
      },
      handler,
    );
  }
}
