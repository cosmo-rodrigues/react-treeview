import styled, { css } from 'styled-components';

interface ICheckProps {
  isIndeterminate: boolean;
  isChecked: boolean;
}

export const CheckboxContainer = styled.div``;

export const Checkbox = styled.span<ICheckProps>`
  align-items: center;
  border: 1px solid white;
  background-color: #baeaff;
  border-radius: 2px;
  color: #fff;
  display: inline-flex;
  font-weight: 700;
  font-size: 12px;
  height: 10px;
  justify-content: center;
  line-height: 16px;
  margin: 0 5px;
  outline: 1px solid #ddd;
  position: relative;
  text-align: center;
  width: 10px;

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: #fff;
      color: blue;
      &::after {
        content: '✓';
      }
    `}

  ${({ isIndeterminate }) =>
    isIndeterminate &&
    css`
      background-color: #ccc;
      &::after {
        content: '•';
      }
    `}
`;

export const Label = styled.label``;
