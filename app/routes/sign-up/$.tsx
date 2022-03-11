import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return <SignUp path="/sign-in" routing="path" />;
}
