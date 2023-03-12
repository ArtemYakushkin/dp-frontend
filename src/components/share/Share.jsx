import React from "react";
import './share.css';
import { MdPermMedia, MdLocationOn } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import {BsFillEmojiLaughingFill} from "react-icons/bs";
import Stark from '../../assets/person/stark.jpg';

export const Share = () => {
    return (
        <div className="share">
            <div className="shareContainer">
                <div className="shareTop">
                    <div className="shareBox">
                        <img src={Stark} alt="" className="shareProfileImg" />
                        <input className="shareInput" type="text" placeholder="Blog post title" />
                    </div>
                    <textarea className="shareTextarea" placeholder="Share your ideas..."></textarea>
                </div>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia className="shareIcon" color="blue"/>
                            <span className="shareText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <IoIosPricetag className="shareIcon" color="green"/>
                            <span className="shareText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <MdLocationOn className="shareIcon" color="tomato"/>
                            <span className="shareText">Location</span>
                        </div>
                        <div className="shareOption">
                            <BsFillEmojiLaughingFill className="shareIcon" color="goldenrod"/>
                            <span className="shareText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareBtn">Share</button>
                </div>
            </div>
        </div>
    )
};