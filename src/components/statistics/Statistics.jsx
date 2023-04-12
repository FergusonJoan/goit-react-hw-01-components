import PropTypes from 'prop-types';

import style from './Statistics.module.scss';
import data from '../../data';

// В компоненті Statistics для заголовка повинен бути рендер по умові. Якщо переданий prop title потрібно рендерити заголовок {title && <h2>{title}</h2>}

const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <section className={style.stats}>
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
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
