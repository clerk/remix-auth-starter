<p align="center">
  <a href="https://www.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_auth_starter" target="_blank" align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./docs/clerk-logo-dark.png">
      <img src="./docs/clerk-logo-light.png" height="64">
    </picture>
  </a>
  <br />
</p>

# Remix Auth Starter

This example shows how to use [Clerk](https://www.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter) with [Remix](https://remix.run/).

[![chat on Discord](https://img.shields.io/discord/856971667393609759.svg?logo=discord)](https://discord.com/invite/b5rXHjAg7A)
[![documentation](https://img.shields.io/badge/documentation-clerk-green.svg)](https://docs.clerk.dev)
[![twitter](https://img.shields.io/twitter/follow/ClerkDev?style=social)](https://twitter.com/intent/follow?screen_name=ClerkDev)

---

**Clerk is Hiring!**

Would you like to work on Open Source software and help maintain this repository? [Apply today!](https://apply.workable.com/clerk-dev/)

---

<details open>
<summary><h2 style="display: inline-block; margin-left: 4px;">Table of contents</h2></summary>

* [Overview](#overview)
* [Demo](#demo)
* [Getting started](#getting-started)
* [Where the magic happens](#where-the-magic-happens)
* [Documentation](#documentation)
* [Deployment](#deployment-vercel)
* [License info](#license)

</details>

## Overview

This starter demonstrates how to add authentication to your Remix application with [Clerk](https://www.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_auth_starter). The example features adding sign up, sign in, profile management, and an authenticated API route to your Remix application.

Clerk works with Remix SSR and supports server-side rendering out-of-the-box and follows Remix conventions for loaders and higher-order components (HOCs).

## Demo

A live demo of this starter application is available at [clerk-remix-starter.vercel.app](https://clerk-remix-starter.vercel.app/)

## Getting started

To run the starter application locally, you need to:

1. Sign up for a Clerk account at [https://clerk.dev](https://www.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_auth_starter)
2. Clone this repo locally
3. Rename the `.env.sample` to `.env` and then set the required `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` variables from the [API keys](https://dashboard.clerk.dev/last-active?path=api-keys) screen in your Clerk dashboard.
4. `npm install` the required dependencies
5. `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) and you are ready to go!

## Where the magic happens

In Remix, `app/root.tsx` wraps your entire application in both server and browser contexts. Clerk makes three modifications to this file so the authentication state is shared with your Remix routes.

1. `rootAuthLoader` exported as `loader`
2. `ClerkCatchBoundary` exported as `CatchBoundary`
3. The default export wrapped with `ClerkApp`

For more details, please refer to the [Get started with Remix](https://clerk.dev/docs/get-started/remix/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_auth_starter) guide, or take a look at the [`app/root.tsx`](./app/root.tsx) file.

## Documentation

To learn more about Clerk and Remix, take a look at the following resources:

- [Quick start](https://clerk.dev/docs/get-started/remix?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_auth_starter)
- [Clerk Documentation](https://clerk.dev/docs/?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_auth_starter)
- [Remix Documentation](https://remix.run/docs)

## Deployment (Vercel)

After having cloned the repo you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid connecting a Git repository with Vercel, you can also deploy the directory by running the [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git integration](https://vercel.com/docs/concepts/git).

## License

This project is licensed under the **MIT license**.

See [LICENSE](https://github.com/clerkinc/remix-auth-starter/blob/main/LICENSE) for more information.
