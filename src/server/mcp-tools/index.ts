import { allUsersTool } from "./all-users/tool";
import { registerUserTool } from "./register-user/tool";

export const MCP_TOOLS_V2 = [registerUserTool, allUsersTool] as const;
