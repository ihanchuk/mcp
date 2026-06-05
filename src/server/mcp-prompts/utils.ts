import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { AnyPrompt } from "./types";

export function registerPromptsV2(
  server: McpServer,
  prompts: readonly AnyPrompt[],
) {
  for (const { name, config, handler } of prompts) {
    server.registerPrompt(name, config, handler);
  }
}
