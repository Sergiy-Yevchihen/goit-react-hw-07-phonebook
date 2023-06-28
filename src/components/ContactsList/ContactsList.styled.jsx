import styled from '@emotion/styled';

export const ListContacts = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemContacts = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: 20px;
  color: #616161;
`;

export const ButtonDelete = styled.button`
  min-width: 60px;
  padding: 2px;
  margin-left: auto;
  border: 1px solid #616161;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  color: #616161;
  box-shadow: 1px 2px 2px rgb(0 0 0 / 0.5;
  background-color: #3498db;

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  :hover {
    border: 1px solid #fff;
    box-shadow: 1px 2px 2px rgb(0 0 0 / 0.5;
    color: #fff;
  }
`;
