import { FAKE_USERS } from "../../stubs/stub.js";

export const allUsersResourceHandler = async () => {
  return {
    contents: [
      {
        uri: "users://all",
        text: JSON.stringify(FAKE_USERS, null, 2),
        mimeType: "application/json",
      },
    ],
  };
};
