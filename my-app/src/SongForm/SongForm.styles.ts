import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 36px;
  background: rgba(255, 255, 255, 0.3); 
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  height: fit-content;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #2d3748;
  align-items: flex-start;
`;

export const Input = styled.input`
  margin-top: 6px;
  padding: 10px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  padding: 12px;
  background-color: #3182ce;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2b6cb0;
  }

  &:active {
    transform: scale(0.98);
  }
`;
