import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { FAKE_USERS } from "./tools/register-user/stub";
import {
  registerUserDefinition,
  registerUserHandler,
} from "./tools/register-user";

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

server.registerTool(
  registerUserDefinition.name,
  registerUserDefinition.config,
  registerUserHandler,
);

server.registerTool(
  "List-All-Users",
  {
    description: "Get complete list of Users",
    annotations: {
      readOnlyHint: false, // Является ли инструмент строго безопасным для чтения (аналог GET-запроса).
      destructiveHint: true, // Указывает, что метод разрушительный (удаляет данные)
      idempotentHint: false, // Повторный вызов упадет с ошибкой (таблицы уже нет)
      openWorldHint: false, // Инструмент работает локально с БД, а не с внешним интернетом
    },
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({ users: FAKE_USERS }, null, 2),
        },
      ],
    };
  },
);

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
