import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'

function ChatMessage({ message, sender}) {
          // const sender = props.sender;
          // const message = props.message;
          // const { message, sender } = props;

          // if (sender === 'robot') {
          //   return(
          //      <div>
          //     <img src ="robot.png" width="50"/>
          //     {message}
          //   </div>
          //   );
          // }

          const responseImage = "w-[45px] ";

          return (
            <div class={sender == 'user'
              ? "flex justify-end items-start"
              : "flex justify-start items-start"
             }>
              {sender === 'robot' && (
                <img src ={RobotProfileImage} class={responseImage}/>
              )}
              <div class="bg-gray-200 py-[15px] px-[20px] rounded-[10px] mx-[10px] mb-[20px] max-w-[300px]">
                {message}
              </div>
              {sender === 'user' && (
                <img src ={UserProfileImage} class={responseImage}/>
              )}
            </div>
          ); 
        }
    
export default ChatMessage;