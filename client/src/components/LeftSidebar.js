import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../utils/inputIcon";
import { IconGlobe } from "@stackoverflow/stacks-icons";

export default function LeftSidebar() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const onClick = () => {
    sessionStorage.removeItem("searchText");
  };

  return (
    <div>
      <ol className="flex flex-col w-full text-[15px]">
        <li
          className={`${
            path === ""
              ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
              : ""
          } pl-5 py-2 mt-9 mb-2 font-normal hover:font-semibold`}
        >
          <Link to="/" onClick={onClick}>
            Home
          </Link>
        </li>
        <li className="mt-3 mb-2">
          <ul>
            <span className="pl-5 text-[12px] text-soGray-darker">PUBLIC</span>
            <li
              className={`${
                path === "question"
                  ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
                  : ""
              } flex justify-start items-center flex-row pl-5 py-2 my-2 hover:font-semibold text-[15px] font-normal gap-x-1`}
            >
              {Icon(IconGlobe)}
              <Link to="/question" onClick={onClick}>
                Questions
              </Link>
            </li>
            <li
              className={`${
                path === "tags"
                  ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
                  : ""
              } flex justify-start items-center flex-row pl-11 py-2 my-2 hover:font-semibold text-[15px] font-normal gap-x-1`}
            >
              <Link to="/tags" onClick={onClick}>
                Tags
              </Link>
            </li>
            <li
              className={`${
                path === "users"
                  ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
                  : ""
              } flex justify-start items-center flex-row pl-11 py-2 my-2 hover:font-semibold text-[15px] font-normal gap-x-1`}
            >
              <Link to="/users" onClick={onClick}>
                Users
              </Link>
            </li>
            <li
              className={`${
                path === "compaines"
                  ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
                  : ""
              } flex justify-start items-center flex-row pl-11 py-2 my-2 hover:font-semibold text-[15px] font-normal gap-x-1`}
            >
              <Link to="/compaines" onClick={onClick}>
                Companies
              </Link>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
