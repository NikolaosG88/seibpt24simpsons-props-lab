import React from 'react';
import './ProfileCard.css'

export const profileCard = [
    {
        image: '/images/homer.jpg',
        name: "Homer Simpson",
        description: "Loves his family as much as his family",
        email: "homer@simpson.com",
        id: 1,
    },
    {
        image: '/images/lisa.png',
        name: "Lisa Simpson",
        description: "Amazing Harmonica Player",
        email: "lisa@uni.edu",
        id: 2,
    },
    {
        image: '/images/maggie.png',
        name: "Maggie Simpson",
        description: "All names with double G in them are known Forces!",
        email: "maggie@ifyouseeherrunfast.com",
        id: 3,
    },
    {
        image: '/images/marge.png',
        name: "Marge Simpson",
        description: "Marge is a role model",
        email: "marge@simpson.com",
        id: 4,
    },
    {
        image: '/images/bart.png',
        name: "Bart Simpson",
        description: "Bart is the internal prankster",
        email: "bart@simpson.com",
        id: 5,
    },
];

export default function ProfileCard(props) {
    return(
        <div id="single-article-1" className="single-article">
            <div id="card-front-1" className="front-card tb-card">
                <img src={props.pic} className="profile-image" alt={props.name} />
                <div className="single-content">
                    <div className="card-middle">
                        <h1>{props.name}</h1>
                        <p className="team-p1">
                           {props.description }
                        </p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-email">
                           {props.email}
                        </div>
                        <div className="card-icon profile-trigger" data-id="single-article-1" >
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};