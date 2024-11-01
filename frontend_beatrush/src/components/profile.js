import React from 'react'
import profileImage from '../data/profile_image.jpg';
function Profile() {
    return(
        <>
            <div className="flex flex-col items-center p-10 bg-gray-50 min-h-screen">
                <div className="flex flex-row items-center space-x-10 p-10">
                    <img 
                    src={profileImage} 
                    alt="profile_photo" 
                    className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover"
                    />

                    <div className="flex flex-col space-y-2">
                    <div className="text-2xl font-semibold">Demo User</div>
                    
                    <div className="flex space-x-6 text-gray-600">
                        <div><span className="font-bold">150</span> posts</div>
                        <div><span className="font-bold">2k</span> followers</div>
                        <div><span className="font-bold">180</span> following</div>
                    </div>

                    <div className="text-sm text-gray-800">
                        Music lover | Battle your way to the top 🎶 | #BeatRush
                    </div>
                    </div>
                </div>

                </div>

        </>
    );
}

export default Profile;
