import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li>
        <h2>{good}</h2>
        <h3>Good:</h3>
      </li>
      <li>
        <h2>{neutral}</h2>
        <h3>Neutral:</h3>
      </li>
      <li>
        <h2>{bad}</h2>
        <h3>Bad:</h3>
      </li>
      <li>
        <h2>{total}</h2>
        <h3>Total:</h3>
      </li>
      {positivePercentage ? (
        <li>
          <h2>{positivePercentage}</h2>
          <h3>Positive Feedback (%)</h3>
        </li>
      ) : (
        <li>
          <h2>0</h2>
          <h3>Positive Feedback (%)</h3>
        </li>
      )}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};