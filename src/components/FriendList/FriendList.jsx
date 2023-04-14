import style from './FriendList.module.scss';
import friends from 'data/friends.json';

import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = () => {
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

export default FriendList;
