import { User } from '@/types';
import React from 'react';

type Props = {
  users: User[];
};

function UserList({ users }: Props) {

  if(!users.length) {
    return <p>No users found</p>
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="p-2 border-b-2">
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
