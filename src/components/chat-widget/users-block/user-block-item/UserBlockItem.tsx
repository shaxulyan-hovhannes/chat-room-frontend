import React, { FC } from "react";
import styles from "./UsersBlockItem.module.scss";
import { IUser } from "models/user";

interface UsersBlockItemProps {
  id: string;
  name: string;
  onSelectItem: (user: IUser) => void;
  selectedUser: IUser;
}

const UsersBlockItem: FC<UsersBlockItemProps> = ({
  id,
  name = "",
  onSelectItem = () => {},
  selectedUser,
}) => {
  return (
    <div
      className={`${styles.itemRoot} ${
        id === selectedUser.id ? styles.selected : ""
      }`}
      onClick={() => onSelectItem({ id, name })}
    >
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default UsersBlockItem;
