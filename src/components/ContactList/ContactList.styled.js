import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ccc;
  border: 3px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  gap: 20px;
`;

export const ContactName = styled.span`
  color: blue;
  font-size: 20px;
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  color: #666;
`;

export const DeleteButton = styled.button`
  background-color: #4f2ee8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e2494;
  }
`;
