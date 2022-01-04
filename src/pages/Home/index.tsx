import React from "react";
import { Screen } from "assets/styles/Screen";
import { BodyContainer, HeaderContainer } from "./styles";
import Button from "components/Button";
import { useAuth } from "hooks/Auth";

const Home = function Home(): JSX.Element {
  const { signOut } = useAuth();

  return (
    <Screen>
      <HeaderContainer />
      <BodyContainer>
        <Button
          style={{ width: "50%", alignSelf: "center" }}
          title="Log out"
          onPress={() => {
            signOut();
          }}
        ></Button>
      </BodyContainer>
    </Screen>
  );
};

export default Home;
