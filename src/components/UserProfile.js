import { Fragment } from 'react';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <Fragment>
      <main className={classes.profile}>
        <h2>My User Profile</h2>
      </main>
    </Fragment>
  );
};

export default UserProfile;
