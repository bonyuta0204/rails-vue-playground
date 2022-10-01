import { Channel } from "./channel";
import { User } from "./user";

export interface Message {
  id: string;
  content: string;
  created_at: string;
  sender: User;
  channel: Channel;
}
