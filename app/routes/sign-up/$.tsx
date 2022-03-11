import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return <SignUp path="/sign-up" routing="path" />;
}
