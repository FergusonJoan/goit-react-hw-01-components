import style from './FriendList.module.scss';
import friends from 'data/friends.json';

import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = () => {
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
