import PropTypes from 'prop-types';

import style from './Statistics.module.scss';
import data from 'data/data.json';
import getRandomHexColor from 'utils/utils.js';

export const Statistics = ({ title }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {data.map(el => {
          return (
            <li
              className={style.item}
              key={el.id}
              style={{ backgroundColor: getRandomHexColor() }}
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
  ).isRequired,
};
