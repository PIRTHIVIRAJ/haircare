import { createContext, useContext } from "react";

interface ChatContextType {
  openChat: () => void;
}

export const ChatContext = createContext<ChatContextType | null>(null);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  return context;
};
