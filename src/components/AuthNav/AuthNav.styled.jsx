import styled from "@emotion/styled"
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom"

export const Link = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  font-size: 20px;
  line-height: 1.19;
  color: black;
  padding-right: 16px;
  &.active {
    color: tomato;
  }
`;

export const Btn = styled(Button)`
  color: green;
  &.active {
    color: tomato;
  }
`

export const AuthList = styled.ul`
  display: flex;
`;

export const AuthItem = styled.li`
  margin-right: 30px;
`;