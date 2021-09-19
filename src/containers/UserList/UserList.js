import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getUserList } from 'redux/userList/userListActions';

const cls = 'user-list';

export const UserList = ({ className }) => {
  const { userDetailList, isLoading } = useSelector(state => state.users);
  const dispatch = useDispatch();
  return (
    <div className={classNames(cls, className)}>
      <button onClick={() => dispatch(getUserList())}>Get Users</button>
      {isLoading && <p>Loading user info...</p>}
      {userDetailList && userDetailList.map(user => {
        return (
          <div key={user.id}>
            <span style={{ marginRight: '10px' }}>{`id: ${user.id}`}</span>
            <span>{`name: ${user.name}`}</span>
          </div>
        );
      })}
    </div>
  );
};

UserList.propTypes = {
  className: PropTypes.string
};