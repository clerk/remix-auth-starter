import { SignedIn, SignedOut } from "@clerk/remix";
import { Link } from "@remix-run/react";

const ClerkFeatures = () => (
  <Link to="/user" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Explore features provided by Clerk</h3>
      <p>Interact with the user button, user profile, and more to preview what your users will see</p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SsrDemoLink = () => (
  <Link to="/ssr-demo" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Visit the SSR demo page</h3>
      <p>
        See how Clerk hydrates the auth state during SSR and CSR, enabling server-side generation even for
        authenticated pages
      </p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SignupLink = () => (
  <Link to="/sign-up" className="cardContent">
    <img src="/icons/user-plus.svg" />
    <div>
      <h3>Sign up for an account</h3>
      <p>Sign up and sign in to explore all the features provided by Clerk out-of-the-box</p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

// Main component using <SignedIn> and <SignedOut>
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Main = () => (
  <main className="main">
    <h1 className="title">Welcome to your new app</h1>
    <SignedIn>
      <p className="description">You have successfully signed in</p>
    </SignedIn>
    <SignedOut>
      <p className="description">Sign up for an account to get started</p>
    </SignedOut>

    <div className="cards">
      <SignedIn>
        <div className="card">
          <ClerkFeatures />
        </div>
      </SignedIn>
      <SignedIn>
        <div className="card">
          <SsrDemoLink />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="card">
          <SignupLink />
        </div>
      </SignedOut>
      <div className="card">
        <a href="https://dashboard.clerk.dev/last-active?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_starter" target="_blank" rel="noreferrer" className="cardContent">
          <img src="/icons/settings.svg" />
          <div>
            <h3>Configure settings for your app</h3>
            <p>Visit Clerk to manage instances and configure settings for user management, theme, and more</p>
          </div>
          <div className="arrow">
            <img src="/icons/arrow-right.svg" />
          </div>
        </a>
      </div>
    </div>

    <div className="links">
      <a href="https://clerk.dev/docs?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_starter" target="_blank" rel="noreferrer" className="link">
        <span className="linkText">Read Clerk documentation</span>
      </a>
      <a href="https://remixjs.org/docs" target="_blank" rel="noreferrer" className="link">
        <span className="linkText">Read Remix documentation</span>
      </a>
    </div>
  </main>
);

const Footer = () => (
  <footer className="footer">
    <a href="https://github.com/clerkinc/clerk-remix-starter" target="_blank" rel="noopener noreferrer">
      Powered by <img src="/clerk.svg" alt="Clerk.dev" className="footer-logo" />
      +
      <img src="/remix.svg" alt="Remix" className="footer-logo-remix" />
    </a>
  </footer>
);

export default function Index() {
  return (
    <div className="container">
      <Main />
      <Footer />
    </div>
  );
}
