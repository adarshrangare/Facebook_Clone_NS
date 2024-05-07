export { default } from "next-auth/middleware";
console.log("middleware")
export const config = {
	matcher: [
		"/",
	],
};