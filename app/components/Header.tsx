import { SignedIn, SignedOut, UserButton } from "@clerk/remix";
import { Link } from "@remix-run/react";

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Header = () => (
  <header className="header">
    <div className="left">
      <Link to="/" className="logo">
        <img src="/logo.svg" width="32" height="32" alt="Logo" />
        <span className="appName">Your application</span>
      </Link>
    </div>
    <div className="right">
      <SignedOut>
        <Link to="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton userProfileUrl="/user" afterSignOutUrl="/" />
      </SignedIn>
    </div>
  </header>
);

export default Header;
