import React from "react";

const Card = ({avatar, followers, repos, following, name, userName}) => (
    <div className='card' >
    <img
     src={avatar}
     />
    <div>
      <h3>{name || 'No Name'}</h3>
      <h3>{userName}</h3>
      </div>
    <div>
      <a>
        {/* <Icon name='user' /> */}
        {followers} Followers
      </a>
    </div>
    <div>
      <a>
        {/* <Icon name='user' /> */}
        {repos} Repos
      </a>
    </div>
    <div>
      <a>
        {/* <Icon name='user' /> */}
        {following} Following
      </a>
    </div>
  </div>
)

export default Card;