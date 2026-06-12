import { TResource } from "../../types/resource.js";
import { allUsersResourceHandler } from "./handler.js";

export const allUsersResource: TResource = [
  "all-users",
  "users://all",
  {
    title: "get all users",
    mimeType: "application/json",
    description: "Get all users from DB",
  },
  allUsersResourceHandler,
];
