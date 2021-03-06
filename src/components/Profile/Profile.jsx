import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPosts.Container";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
};
export default Profile;