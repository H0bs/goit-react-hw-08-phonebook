import { useAuth } from "hooks";
import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { Container, Btn } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Filter/>
      <p>Welcome, {user.name}</p>
      <Btn type="button" onClick={() => dispatch(logOut())}>Logout</Btn>
    </Container>
  )
}