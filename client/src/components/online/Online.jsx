import "./online.css"

const Online = ({user}) => {
  return (
       <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img className="rightbarProfileImg" src={user.profilePicture}/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
   )
}

export default Online
