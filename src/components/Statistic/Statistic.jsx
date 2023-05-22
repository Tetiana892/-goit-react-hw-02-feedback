import PropTypes from 'prop-types';
import { ListStatistic, ItemStatistic } from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ListStatistic>
      <ItemStatistic>Good :{good}</ItemStatistic>
      <ItemStatistic>Neutral :{neutral}</ItemStatistic>
      <ItemStatistic>Bad :{bad}</ItemStatistic>
      <ItemStatistic>Total :{total}</ItemStatistic>
      <ItemStatistic>Positive feedback :{positivePercentage}%</ItemStatistic>
    </ListStatistic>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistic;
