import style from './FriendListItem.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;

  return (
    <li className={style.item}>
      <span className={clsx(style.status, isOnline && style.isOnline)}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
