import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/auth/authSlice";
import DetailsPage from "../components/DetailsPage";

const Home = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(text));
    setText("");
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <main className="flex justify-center items-center min-h-screen bg-[#141C2F] px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-semibold text-center">
          Loading...
        </h1>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#141C2F] flex flex-col items-center px-4 py-10">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="search"
            placeholder="Search GitHub Username..."
            className="w-full bg-[#1F2A48] text-white rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg text-sm transition"
        >
          Search
        </button>
      </form>

      {/* Details Section */}
      <div className="w-full max-w-2xl mt-8">
        <DetailsPage />
      </div>
    </div>
  );
};

export default Home;
