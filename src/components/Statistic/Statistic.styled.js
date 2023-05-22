import styled from '@emotion/styled';

export const ListStatistic = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 20px;
  width: 600px;

  background-color: #6495ed;
  border-radius: 45px;
  box-shadow: 1rem 1rem 2rem rgba(38, 60, 125, 0.435),
    -1rem -1rem 2rem rgb(38, 60, 125, 0.435);
`;

export const ItemStatistic = styled.li`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 200;
  color: #ffffff;
  list-style-type: none;
`;
