import { ButtonForm, ButtonClick } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonForm>
      {options.map(option => {
        return (
          <ButtonClick
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </ButtonClick>
        );
      })}
    </ButtonForm>
  );
};

export default FeedbackOptions;
