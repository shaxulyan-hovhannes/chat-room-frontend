import { AddMessageDto, IMessage } from "./message";
import { IUser, AddUserDto } from "./user";

export interface ServerToClientEvents {
  message: (data: IMessage) => void;
  user_created: (data: IUser) => void;
}

export interface ClientToServerEvents {
  message: (data: AddMessageDto) => void;
  join: (id: string) => void;
  leave: (id: string) => void;
  user_created: (data: AddUserDto) => void;
}
