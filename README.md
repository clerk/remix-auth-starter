# Clerk and Remix Example

<div align="center">
    <img alt="Clerk and Hasura logos" src="./docs/logos/clerk-remix.jpg" width="550" />
</div>

This example shows how to use [Clerk](https://www.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_starter) with Remix. The example features adding sign up, sign in, profile management, and an authenticated API route to your Remix application.

---

**Clerk is Hiring!**

Would you like to work on Open Source software and help maintain this repository? Apply today https://apply.workable.com/clerk-dev/.

---

## Demo

A hosted demo of this example is available at [clerk-remix-starter.vercel.app](https://clerk-remix-starter.vercel.app/)

## Where the magic happens

In Remix, app/root.tsx wraps your entire application in both server and browser contexts. Clerk requires three modifications to this file so we can share the authentication state with your Remix routes. First, you need to import`rootAuthLoader` and use it as your root loader. Then, import `ConnectClerk` and`ConnectClerkCatchBoundary` and user these HOCs to wrap the default `App` and `CatchBoundary` components respectively - that's all :)  

For more details, please refer to the [Get started with Remix](https://docs.clerk.dev/get-started/remix/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_starter) guide, or simply take a look at the `app/root.tsx` file.


## Running the starter locally

To run the example locally you need to:

1. Sign up for a Clerk account at [http://clerk.dev](https://www.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_starter)
2. Clone this repo locally
3. Rename the`.env.sample` to `.env` and then set the required CLERK_FRONTEND_API and CLERK_API_KEY variables from your Clerk project
4. Run `npm i` to install the required dependencies
5. Run `npm run dev` to start the development server
6. Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## Learn More

To learn more about Clerk.dev and Remix, take a look at the following resources:

- [Quick start](https://docs.clerk.dev/get-started/remix?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter)
- [Clerk.dev Documentation](https://docs.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter) - learn about Clerk.dev features and API.
- [Remix Documentation](https://remix.run/docs?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter) - learn about Remix features and API.

## Deployment (Vercel)

After having cloned the repo you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
