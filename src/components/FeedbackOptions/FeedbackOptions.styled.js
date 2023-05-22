import styled from '@emotion/styled';

export const ButtonForm = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
export const ButtonClick = styled.button`
  display: inline-block;
  padding: 14px 20px;

  min-width: 60px;
  border: 0;
  border-radius: 20px;
  background: #4676d7;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #1d49aa;
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`;
