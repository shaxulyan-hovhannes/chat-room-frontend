import { io, Socket } from "socket.io-client";
import { config } from "config";
import { ClientToServerEvents, ServerToClientEvents } from "models/event";

import { AddMessageDto } from "../models/message";
import { AddUserDto } from "models/user";

class SocketService {
  private readonly socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(config.socketUrl || "", {
      autoConnect: false,
    });

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  createUser(data: AddUserDto) {
    this.socket.emit("user_created", data);
  }

  sendMessage(data: AddMessageDto) {
    this.socket.emit("message", data);
  }

  subscribeToMessages(messageHandler: ServerToClientEvents["message"]) {
    this.socket.on("message", messageHandler);
  }

  subscribeToCreatedUsers(
    userCreatedHandler: ServerToClientEvents["user_created"]
  ) {
    this.socket.on("user_created", userCreatedHandler);
  }

  join(id: string) {
    this.socket.emit("join", id);
  }

  leave(id: string) {
    this.socket.emit("leave", id);
  }
}

const socketService = new SocketService();

export default socketService;
