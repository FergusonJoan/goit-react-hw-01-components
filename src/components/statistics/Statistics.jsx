import PropTypes from 'prop-types';

import style from './Statistics.module.scss';
import data from '../../data/data';

const Statistics = ({ title }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {data.map(el => {
          return (
            <li
              className={style.item}
              key={el.id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className={style.label}>{el.label}</span>
              <span className={style.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
