import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <span className="label">Good: </span>
        <span className="quantity">{good}</span>
      </li>
      <li>
        <span className="label">Neutral: </span>
        <span className="quantity">{neutral}</span>
      </li>
      <li>
        <span className="label">Bad: </span>
        <span className="quantity">{bad}</span>
      </li>
      <li>
        <span className="label">Total: </span>
        <span className="quantity">{total}</span>
      </li>
      <li>
        <span className="label">Positive feedback: </span>
        <span className="quantity">{positivePercentage}%</span>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
