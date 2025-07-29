import React, { useEffect } from "react";
import LinkDetails from "../components/LinkDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserRepos } from "../features/auth/authSlice";

const ReposAll = () => {
  const { repos, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserRepos(user?.login || "ChouhanAnkit"));
  }, [dispatch, user]);

  if (!user || !repos) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#141C2F]">
        <h1 className="text-red-400 text-2xl font-bold">
          Loading... Please wait
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[#141C2F] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        {repos.map((repo) => (
          <LinkDetails key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default ReposAll;
