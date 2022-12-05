import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "hooks";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </Header>
  )
}