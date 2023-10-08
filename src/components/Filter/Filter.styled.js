import styled from 'styled-components';

export const FilterWrapper = styled.div`
  background-color: #ccc;
  border: 3px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  height: 300px;
`;

export const FilterLabel = styled.label`
  color: blue;
  font-size: 18px;
  font-weight: bold;
`;

export const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eeedf0;
`;
