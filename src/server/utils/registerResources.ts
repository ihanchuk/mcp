import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { RegisterResources, TResource } from "../types/resource";

export const registerMCPResources: RegisterResources = (
  server: McpServer,
  resources: Array<TResource>,
) => {
  resources.forEach((res) => server.registerResource(...res));
};
