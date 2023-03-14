import React from 'react';
import './profileRightbar.css';
import Friend from '../../assets/person/osa.jpg';

export const ProfileRightbar = () => {
    return (
        <div className='profileRightbar'>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={Friend} alt="" className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Hope Pym</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={Friend} alt="" className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Hope Pym</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={Friend} alt="" className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Hope Pym</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={Friend} alt="" className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Hope Pym</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={Friend} alt="" className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Hope Pym</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={Friend} alt="" className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Hope Pym</span>
                </div>
            </div>
        </div>
    )
};
