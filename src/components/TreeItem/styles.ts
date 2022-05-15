import styled from 'styled-components';

interface IButtonProps {
  active: boolean;
}

interface IChildrenProps {
  shouldRetreat: boolean;
}

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
`;

export const ItemContainer = styled.div<IChildrenProps>`
  margin-left: ${({ shouldRetreat }) => (!shouldRetreat ? '12px' : '')};
  :hover {
    background-color: rgba(192, 192, 192, 0.3);
    z-index: 0;
  }
`;

export const SubItemContainer = styled.div`
  /* background-color: #fff; */
  margin-left: 20px;
`;

export const ExpandButton = styled.button<IButtonProps>`
  align-items: center;
  background-color: rgba(0, 0, 255, 0.5);
  border: none;
  border-radius: 6px;
  color: #fff;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  font-weight: 500;
  justify-content: center;
  height: 12px;
  margin-top: 5px;
  padding-top: ${({ active }) => (active ? '3px' : '0')};
  width: 12px;
`;
