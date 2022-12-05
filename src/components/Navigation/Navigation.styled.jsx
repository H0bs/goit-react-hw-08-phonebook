import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;
  padding-left: 16px;
  color: #2a363b;
  &.active {
    color: tomato;
  }
`;