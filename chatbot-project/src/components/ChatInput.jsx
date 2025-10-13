import { useState } from 'react';
import { Chatbot } from 'supersimpledev';

function ChatInput({chatMessages, setChatMessages}) {
          const [inputText, setInputText] = useState('');

          function saveInputText(event) {
            setInputText(event.target.value)
          }

          function sendMessage() {
            const newChatMessages = [
              ...chatMessages,
              {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ]
             setChatMessages(newChatMessages);

            const response = Chatbot.getResponse(inputText);
            
             setChatMessages([
              ...newChatMessages,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ]);

            setInputText('');
          }
          return (
            <div class="flex ">
              <input 
                placeholder = "Send a message to Chatbot" 
                size = "30"
                onChange={saveInputText}
                value={inputText}
                class="py-[12px] px-[15px] rounded-[10px] border-[1px] text-[15px] mt-[10px] ml-[10px] flex-grow mb-[60px] "
              />
              <button onClick={sendMessage} class="bg-green-500 text-black px-[20px]  ml-[10px] outline-none rounded-[10px] cursor-pointer font-semibold ">
                Send
              </button>
            </div>
          );
        }

export default ChatInput;