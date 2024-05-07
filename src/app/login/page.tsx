import { Login } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
	const session = await getServerSession();
	console.log({session});
	
	// logged user will redirct to home

	if (session) {
		redirect("/");
	} else {
		return <Login />;
	}
}

