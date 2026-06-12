import { allUsersTool } from "./all-users/tool.js";
import { registerUserTool } from "./register-user/tool.js";

export const MCP_TOOLS_V2 = [registerUserTool, allUsersTool] as const;
