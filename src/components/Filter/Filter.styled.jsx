import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 15px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  font-size: 20px;
  font-weight: 600;
  font-family: inherit;
  color: #616161;
`;

export const InputForm = styled.input`
  min-width: 220px;
  padding: 5px 5px;
  border: 1px solid #616161;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  :hover {
    border-color: 1px 2px 2px rgb(0 0 0 / 0.5);
    box-shadow: 2px 5px 2px rgb(0 0 0 / 0.5);
  }
`;
