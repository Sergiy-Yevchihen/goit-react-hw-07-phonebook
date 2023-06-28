import styled from '@emotion/styled';

export const FormInput = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: centr;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #616161;
  border-radius: 4px;
  box-shadow: 1px 2px 2px rgb(0 0 0 / 0.5);
  color: #757575;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 400;
  font-family: inherit;
  color: #111;
`;

export const InputForm = styled.input`
  min-width: 300px;
  padding: 5px 5px;
  border: 1px solid #616161;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  :hover {
    border-color: #3498db;
    box-shadow: 1px 2px 2px rgb(0 0 0 / 0.5);
  }
`;

export const ButtonForm = styled.button`
  min-width: 110px;
  padding: 5px;
  border: 1px solid #616161;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  color: #616161;
  box-shadow: 1px 2px 2px rgb(0 0 0 / 0.5);
  background-color: #4cd964;

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  :disabled {
    background-color: #e0e0e0;
    box-shadow: none;
    color: #fff;
  }

  :enabled:hover {
    border: 1px solid #fff;
    box-shadow: 2px 5px 2px rgb(0 0 0 / 0.5);
    color: #fff;
  }
`;
