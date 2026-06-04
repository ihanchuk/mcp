import {
  McpServer,
  ReadResourceCallback,
  ResourceMetadata,
} from "@modelcontextprotocol/sdk/server/mcp";

export type TResource = [
  string,
  string,
  ResourceMetadata,
  ReadResourceCallback,
];

export type RegisterResources = (
  server: McpServer,
  resources: Array<TResource>,
) => void;
