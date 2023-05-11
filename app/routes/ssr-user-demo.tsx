import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }

  const user = await createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY }).users.getUser(userId);
  return { serialisedUser: JSON.stringify(user) };
};

export default function SsrDemoPage() {
  const { serialisedUser } = useLoaderData();

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">SSR Demo page with /api.server</h1>
        <p className="description">This route has a loader that fetches the user on the server-side.</p>
        <p className="description">
          If you only intend to use the `user` object on the client-side, you most probably want to simply use the
          `useUser` hook instead.
        </p>

        <div className="preContainer">
          <h2>useLoaderData hook</h2>
          <p className="description">
            The loader uses getAuth to get the userId and users.getUser to fetch the user object
          </p>
          <pre>{JSON.stringify({ serialisedUser }, null, 2)}</pre>
        </div>
      </main>
    </div>
  );
}
