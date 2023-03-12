import React from 'react';
import './post.css';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Stark from '../../assets/person/stark.jpg';
import Ironman from '../../assets/picture/iron_man.png';

export const Post = () => {
  return (
    <div className='post'>
        <div className="postTop">
              <div className="postTopLeft">
                  <img src={Stark} alt="" className="postProfileImg" />
                  <span className="postUsername">Tony Stark</span>
                  <span className="postDate">5 min ago</span>
              </div>
              <div className="postTopRight">
                  <BiDotsVerticalRounded className='postIcon'/>
              </div>
        </div>
        <div className="postCenter">
            <span className="postTitle">Iron Man - Tony Stark</span>
            <img src={Ironman} alt="" className="postImg" />
            <span className='postText'>Anthony Edward "Tony" Stark is the young and eccentric heir to his father and the huge corporation Stark Industries. Billionaire and genius. Designed the unique Iron Man suit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio commodi expedita tenetur cum illo rerum odio eius quam vitae accusamus, labore doloribus molestiae. Labore dolores tempora aliquam doloribus recusandae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis dolor libero, ducimus beatae expedita odio vitae deserunt illo soluta sunt nobis unde quaerat rerum iure officiis eum repellat. Aliquam.</span>
        </div>
        <div className="postBottom"></div>  
    </div>
  )
}
