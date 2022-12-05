
import { Link, AuthList, Btn } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthList>
      <Link to="/register">
        <Btn variant="outlined">
          Registration
        </Btn>
      </Link >
      <Link  to="/login">
        <Btn variant="outlined">
          LogIn
        </Btn>
      </Link >
    </AuthList>
  )
}