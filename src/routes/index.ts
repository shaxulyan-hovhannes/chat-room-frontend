import { ComponentType, lazy } from "react";

// import HomePage from "pages/home-page";
// import ChatRoomPage from "pages/chat-room-page";
const HomePage = lazy(() => import("pages/home-page"));
const ChatRoomPage = lazy(() => import("pages/chat-room-page"));

export enum Paths {
  HOME = "/",
  CHATROOM = "/chat-room",
}

export interface IRoute {
  path: Paths;
  Component: ComponentType;
}

export const publicRoutes: IRoute[] = [
  { path: Paths.HOME, Component: ChatRoomPage },
];

export const authRoutes: IRoute[] = [
  { path: Paths.CHATROOM, Component: ChatRoomPage },
];
