// import { UserProfile } from "@clerk/remix";

// export default function UserProfilePage() {
//   return <UserProfile path="/user" routing="path" />;
// }

import { Outlet } from "remix";
import { DefaultNavBarLinks } from "@clerk/clerk-js/src/ui/userProfile/NavBarLinks";
import { EnvironmentProvider } from "@clerk/clerk-js/src/ui/contexts/EnvironmentContext";
import { CoreClerkContextWrapper } from "@clerk/clerk-js/src/ui/contexts/CoreClerkContextWrapper";
import { useClerk } from "@clerk/remix";
// import Clerk from '@clerk/clerk-js';

const AttributeData = {
  enabled: true,
  required: true,
  name: "username" as const,
  verifications: [],
  used_for_first_factor: true,
  first_factors: [],
  used_for_second_factor: true,
  second_factors: [],
  verify_at_sign_up: true,
};

export default function UserProfilePage() {
  const clerk = useClerk();
  return (
    <CoreClerkContextWrapper
      // @ts-ignore
      clerk={clerk}
    >
      <EnvironmentProvider
        value={{
          // @ts-ignore
          userSettings: {
            attributes: {
              username: AttributeData,
              email_address: AttributeData,
              web3_wallet: AttributeData,
              first_name: AttributeData,
              last_name: AttributeData,
              password: AttributeData,
              phone_number: AttributeData,
            },
          },
          // @ts-ignore
          authConfig: {},
          // @ts-ignore
          displayConfig: {},
          isSingleSession: () => true,
          isProduction: () => true,
          onWindowLocationHost: () => true,
        }}
      >
        <nav className="cl-navbar">
          <DefaultNavBarLinks />
        </nav>
        <div className="cl-main">
          <Outlet />
        </div>
      </EnvironmentProvider>
    </CoreClerkContextWrapper>
  );
}
