import prismadb from "@/lib/prismadb"
import { auth, currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json() 
        const user = await currentUser()
        const { src, name, description, instructions, seed, categoryId} = body 

        // console.log("User object:", user);
        // if (user) {
        //     console.log("User ID:", user.id);
        //     console.log("User First Name:", user.firstName);
        // } else {
        //     console.log("No user object returned");
        // }

        if(!user || !user.id || !user.firstName) {
            // console.log(user, user?.id, user?.firstName)
            return new NextResponse("Unauthorized", { status: 401})
        }

        if (!src || !name || !description || !instructions || !seed || !categoryId) {
            return new NextResponse("Missing required fields", { status: 400})
        }

        //TODO: Check for subscription
        const companion = await prismadb.companion.create({
            data: {
                categoryId,
                userId: user.id,
                userName: user.firstName, 
                src,
                name, 
                description,
                instructions,
                seed
            }
        })
        return NextResponse.json(companion)
    } catch(error) {
        console.log("[COMPANION_POST]", error)
        return new NextResponse("Internal Error", { status: 500})
    }
}