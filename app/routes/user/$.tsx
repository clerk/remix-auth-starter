import { UserProfile } from "@clerk/remix";

export default function UserProfilePage() {
  return <UserProfile path="/user" routing="path" />;
}
