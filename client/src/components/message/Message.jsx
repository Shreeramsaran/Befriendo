import "./message.css"
import {format} from "timeago.js";

export default function Message({message, own}) {
  if (!message) {
    return null; 
  }
  return (
    <div className={own ? "message own" : "message"}>
       <div className="messageTop">
          <img 
            className="messageImg"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw20MO-hmigY2OTEpsG1kCc0&ust=1687595818800000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPiWsb_-2P8CFQAAAAAdAAAAABAZ" 
            alt=""
         />
         <p className="messageText">{message.text}</p>
       </div>
       <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
