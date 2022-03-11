import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return <SignIn path="/sign-in" routing="path" />;
}
