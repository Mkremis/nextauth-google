export { default } from "next-auth/middleware";

// This is a sample route that will be accessed with /api/auth/signin
export const config = { matcher: ["/dashboard"] };
