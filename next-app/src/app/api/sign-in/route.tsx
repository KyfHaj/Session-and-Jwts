// import { NextResponse } from "next/server"

// export async function POST(req: Request) {
//   try {
//     console.log("Data received: ")
//     const body = await req.json()
//     console.log("Body: ", body)
//     return NextResponse.json({ data: "ok" })
//   } catch (error: any) {
//     console.log("error in handle !")
//     return new NextResponse("Internal Error", { status: 500 })
//   }
// }

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Data received:");
    const body = await req.json();
    console.log("Body: ", body);

    if (!body.email || !body.password) {
      throw new Error("Missing required fields");
    }

    // Construct the absolute URL for redirection
    const baseUrl = req.headers.get('host');
    const redirectUrl = `http://localhost:3000/dashboard`;

    console.log("Redirecting to:", redirectUrl);

    // Return a 303 status code for redirection
    return NextResponse.redirect(redirectUrl, 303);
  } catch (error: any) {
    console.log("Error in handle:", error.message || error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
