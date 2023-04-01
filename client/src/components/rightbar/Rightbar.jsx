import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png"/>
          <span className="birthdayText">
            <b>Pallu Padoda</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" className="rightbarAd"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Arjav Mandu</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Arjav Mandu</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Arjav Mandu</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Arjav Mandu</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
