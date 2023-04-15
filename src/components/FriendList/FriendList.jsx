import style from './FriendList.module.scss';
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
