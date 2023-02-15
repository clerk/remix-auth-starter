import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useUser } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";

const mockGetPosts = (userId: string) => {
  return Promise.resolve([{ title: "A Post", content: "Hello from Clerk + Remix" }]);
};

export const loader: LoaderFunction = async (args) => {
  const { userId, sessionId, getToken } = await getAuth(args);
  console.log("Use getAuth() to access the auth state:", userId, sessionId, getToken);

  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }

  const posts = await mockGetPosts(userId);
  return { posts };
};

export default function SsrDemoPage() {
  const { isSignedIn, isLoaded, user } = useUser();
  const { posts } = useLoaderData();

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">SSR Demo page</h1>
        <p className="description">
          This page and any displayed data are fully rendered on the server side. Reload this page to try it out.
        </p>

        <div className="preContainer">
          <h2>useLoaderData hook</h2>
          <p className="description">
            The loader uses getAuth to get the userId and fetch the posts from a remote database
          </p>
          <pre>{JSON.stringify({ posts }, null, 2)}</pre>
        </div>

        <div className="preContainer">
          <h2>useUser hook</h2>
          <p className="description">
            Passing {`{ loadUser: true }`} to the root loader makes all Clerk data available both during SSR and CSR
          </p>
          <pre>{JSON.stringify({ isLoaded })}</pre>
          <pre>{JSON.stringify({ isSignedIn })}</pre>
          <pre>{JSON.stringify({ user }, null, 2)}</pre>
        </div>
      </main>
    </div>
  );
}
