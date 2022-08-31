import { Channel } from "./channel";
import { User } from "./user";

export type Message = {
  id: string;
  content: string;
  created_at: string;
  sender: User;
  channel: Channel;
};
