## CURRENT BUGS
Sign in with Github doesn't allow creation of new agents --> This issue is because Github doesn't have an associated first + last_name and therefore is missing an attribute when adding to PrismaDB. **Need to fix 

## Getting Started
First, run the development server:
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup Notes
.env file with Clerk next.js API keys 
and the following: 
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

Planetscale DATABASE_URL needs to be put in ENV file


## Tech Stack
Authentication  | Clerk
Database        | Planet Scale (Primsa)
Front-end       | React, TypeScript, Tailwind 
Images          | Cloudinary

## Terminal Functions

npx prisma studio -- to check SQL Database 
node scripts/seed.ts -- to run script that updates categories 

After changes to Prisma Schema you need to use 'npx prisma generate' and 'npx prisma db push'