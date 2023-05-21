import styled from '@emotion/styled';

export const FeedbackForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #c0c0c0;
`;

export const ButtonForm = styled.div`
  display: flex;
  gap: 40px;
`;

export const TitleFeedback = styled.p`
  padding: 60px;
  text-align: center;
  font-size: 28px;
  line-height: 1.62;
  font-weight: 800;
  color: #fff;
  border: 3px solid #cbd6ee;
  border-radius: 45px;
  /* width: 350px; */
  background: #7b68ee;
  box-shadow: 10px 10px 16px -5px rgba(0, 0, 0, 0.75);
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
export const StatisticsTitle = styled.p;
