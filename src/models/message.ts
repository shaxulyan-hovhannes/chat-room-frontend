import { IUser } from "./user";

export interface IMessage {
  id: number;
  sender_id: string;
  receiver_id: string;
  content: string;
  timestamp: number;
}

export interface AddMessageDto {
  sender_id: string;
  receiver_id: string;
  content: string;
}
