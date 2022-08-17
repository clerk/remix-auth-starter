import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="container">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
