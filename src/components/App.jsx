import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

import user from '../user';
import data from '../data';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics>title="Upload stats" stats={data}</Statistics>
    </>
  );
};
