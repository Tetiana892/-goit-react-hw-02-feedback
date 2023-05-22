import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
