import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import z from "zod";

const FAKE_USERS: Array<{
  name: string;
  email: string;
  address: string;
  phone: string;
}> = [];

const server = new McpServer(
  {
    name: "obe",
    version: "1.0",
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
  "Register-new-User",
  {
    description: "Registration of new User",
    inputSchema: {
      userState: z.object({
        name: z.string().min(3, "Name is required"),
        email: z.string().email(),
        address: z.string(),
        phone: z.string(),
      }),
    },
    annotations: {
      readOnlyHint: false, // Является ли инструмент строго безопасным для чтения (аналог GET-запроса).
      destructiveHint: true, // Указывает, что метод разрушительный (удаляет данные)
      idempotentHint: false, // Повторный вызов упадет с ошибкой (таблицы уже нет)
      openWorldHint: false, // Инструмент работает локально с БД, а не с внешним интернетом
    },
  },
  async ({ userState }) => {
    FAKE_USERS.push(userState);
    return {
      content: [
        {
          type: "text",
          text: `User ${userState.name} was created`,
        },
      ],
    };
  },
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
