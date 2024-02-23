import { ComponentType, lazy } from "react";

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
  { path: Paths.HOME, Component: HomePage },
];

export const authRoutes: IRoute[] = [
  { path: Paths.CHATROOM, Component: ChatRoomPage },
];
