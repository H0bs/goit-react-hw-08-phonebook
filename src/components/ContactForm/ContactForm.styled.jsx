import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 960px;
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 7px 13px 7px -3px rgba(189,178,189,1);
`;
export const FormLabel = styled.label`
  padding-left: 14px;
  font-size: 20px;
`;
export const FormInput = styled.input`
  margin-left: 10px;
  width: 280px;
  padding: 5px;
  font-size: 16px;
`;
export const InputButton = styled.button`
  padding: 5px;
  width: 100px;
  height: 30px;
`;