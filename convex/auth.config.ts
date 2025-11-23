import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain:  "https://clever-kid-22.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;