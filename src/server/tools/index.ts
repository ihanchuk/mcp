import { listAllUsersTool } from "./all-users/tool";
import { registerUserTool } from "./register-user/tool";

export const MCP_TOOLS = [registerUserTool, listAllUsersTool] as const;
