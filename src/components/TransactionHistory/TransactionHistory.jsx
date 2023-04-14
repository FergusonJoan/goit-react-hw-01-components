import PropTypes from 'prop-types';
import style from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
          <th className={style.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(elem => {
          const { type, amount, currency } = elem;
          return (
            <tr key={elem.id}>
              <td className={style.td}>{type}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTipes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
