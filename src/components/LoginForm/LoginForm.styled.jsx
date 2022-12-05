import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding-right: 32px;
  height: 200px;
  width: 450px;
  margin: 0 auto;
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