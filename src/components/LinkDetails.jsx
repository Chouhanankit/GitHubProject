import React from 'react';
import { GrFormView } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { AiOutlineInfo } from "react-icons/ai";
import { CiForkAndKnife } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { useSelector } from 'react-redux';

const LinkDetails = ({ repo }) => {
  const { repos } = useSelector((state) => state.auth);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 shadow-md transition hover:shadow-xl">
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 text-blue-300 font-semibold break-all">
          <IoIosLink className="text-xl" />
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {repo.name}
          </a>
        </span>

        {repo.description && (
          <p className="text-sm text-gray-400">{repo.description}</p>
        )}

        <ul className="flex flex-wrap gap-3 mt-4">
          <li className="flex items-center gap-1 bg-blue-500/30 px-3 py-1 rounded-full text-xs text-white">
            <GrFormView />
            {repo.watchers_count}
          </li>
          <li className="flex items-center gap-1 bg-yellow-500/30 px-3 py-1 rounded-full text-xs text-white">
            <FaStar />
            {repo.stargazers_count}
          </li>
          <li className="flex items-center gap-1 bg-red-500/30 px-3 py-1 rounded-full text-xs text-white">
            <AiOutlineInfo />
            {repo.open_issues_count}
          </li>
          <li className="flex items-center gap-1 bg-green-500/30 px-3 py-1 rounded-full text-xs text-white">
            <CiForkAndKnife />
            {repo.forks_count}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinkDetails;
