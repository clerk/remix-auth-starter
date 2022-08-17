import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <div className="container">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
