import styled from "@emotion/styled";


export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 50px;
`;

export const Btn = styled.button`
  background-color: white;
  padding: 5px;
  width: 100px;
  height: 30px;
  color: #800900;
  border: 1px solid black;
  transition-duration: 0.4s;
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

export const UserName = styled.p`
  margin-right: 50px;
`;  

