import { FC, useState, useEffect } from "react";

import localStorageService from "services/localStorageService";
import { IUser } from "models/user";

import UsersBlockItem from "./user-block-item/UserBlockItem";

interface UsersBlockProps {
  users: IUser[];
  onSelectUser: (user: IUser) => void;
  selectedUser: IUser | {};
}

const UsersBlock: FC<UsersBlockProps> = ({
  users,
  onSelectUser,
  selectedUser,
}) => {
  return (
    <div>
      {users.map((item: any) => (
        <UsersBlockItem
          onSelectItem={onSelectUser}
          selectedUser={selectedUser}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default UsersBlock;
