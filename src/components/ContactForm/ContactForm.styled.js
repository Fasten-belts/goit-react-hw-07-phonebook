import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  padding: 10px;
  background-color: #ccc;
  border: 3px solid #ccc;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  color: blue;
  font-size: 20px;
  font-weight: bold;
`;

export const InputForm = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eeedf0;
`;

export const ErrorForm = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const ButtonForm = styled.button`
  background-color: #4f2ee8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;
