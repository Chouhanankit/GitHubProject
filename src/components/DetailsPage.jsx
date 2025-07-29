import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
    const { user, isLoading } = useSelector((state) => state.auth);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center bg-[#141C2F] h-screen text-center">
                <h1 className="text-2xl text-red-400">Loading...</h1>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="w-full min-h-screen px-4 py-8 sm:px-10 bg-[#141C2F] text-gray-300 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-[#1F2A48] border border-gray-600 rounded-2xl p-6 sm:p-10 shadow-md flex flex-col sm:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex justify-center sm:justify-start">
                    <img
                        className="w-20 h-20 sm:w-32 sm:h-32 rounded-full"
                        src={user.avatar_url}
                        alt={user.name || user.login}
                    />
                </div>

                {/* User Details */}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h2 className="text-2xl font-bold text-white">{user.name || "No Name"}</h2>
                        <p className="text-xs text-gray-400">Joined {new Date(user.created_at).toUTCString().slice(0, 16)}</p>
                    </div>

                    <p className="text-blue-400 mt-1">
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">@{user.login}</a>
                    </p>

                    <p className="mt-4 h-20 overflow-y-auto text-sm">
                        {user.bio || "No bio available."}
                    </p>

                    {/* Stats Section */}
                    <div className="bg-[#141C2F] rounded-xl p-4 mt-6 flex justify-around text-center text-white">
                        <div>
                            <p className="text-xs">Repos</p>
                            <p className="font-semibold">{user.public_repos}</p>
                        </div>
                        <div>
                            <p className="text-xs">Followers</p>
                            <p className="font-semibold">{user.followers}</p>
                        </div>
                        <div>
                            <p className="text-xs">Following</p>
                            <p className="font-semibold">{user.following}</p>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
                        <div className="flex items-center gap-2">
                            <FaLocationDot />
                            <p>{user.location || "Not Available"}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosLink />
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="truncate hover:underline"
                            >
                                {user.html_url}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaTwitter />
                            <p>{user.twitter_username || "Not Available"}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsBuildingsFill />
                            <p>{user.company || "GitHub"}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* View Repos Button */}
            <div className="mt-8">
                <Link
                    to="/repos"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-xl"
                >
                    View All Repos
                </Link>
            </div>
        </div>
    );
};

export default DetailsPage;
