import React from 'react';
import avatar from './avatar.svg';
import './profile.css'

const Profile = () => {
    return (
        <div>
             <div>
                <div className="profile-data">
                    <div className="profile-img">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="profile-info">
                        <h4>Zahid Hossin</h4>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="avg-datails">
                    <div className="avg">
                        <h3>3<sub>hrs</sub></h3>
                        <p>Daily Avg.</p>
                    </div>
                    <div className="avg">
                        <h3>225<sub>hrs</sub></h3>
                        <p>Weekly Avg.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;