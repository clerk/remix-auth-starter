import type { MetaFunction } from "remix";
import { Links, LiveReload, LoaderFunction, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ConnectClerk, ConnectClerkCatchBoundary } from "@clerk/remix";
import styles from "~/styles/shared.css";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export function links() {
  return [
    { rel: "stylesheet", href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css" },
    { rel: "stylesheet", href: styles },
  ];
}

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(
    args,
    ({ auth }) => {
      const { userId, sessionId, getToken } = auth;
      console.log("Root loader auth:", { userId, sessionId, getToken });
      return { message: `Hello from the root loader :)` };
    },
    { loadUser: true }
  );
};

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ConnectClerk(App);

export const CatchBoundary = ConnectClerkCatchBoundary();
