import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconSearch, IconAccessibility } from "@stackoverflow/stacks-icons";
import { fetchUserInfo } from "../utils/fetchLogin";
import sprites from "../assets/images/sprites.svg";
import Icon from "../utils/inputIcon";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState("");
  const [userProfileImageLink, setUserProfileImageLink] = useState("");

  useEffect(() => {
    checkLoginState();
  });

  const onLogoutClick = () => {
    sessionStorage.clear();
    setIsLogin(false);
  };

  const getUserProfile = async () => {
    return await fetchUserInfo().then((data) => {
      setUserProfileImage(data.profile);
      sessionStorage.setItem("userEmail", data.email);
      sessionStorage.setItem("accountId", data.accountId);
    });
  };

  const checkLoginState = () => {
    // 세션스토리지에 저장되어있고, 현재 주소가 /login이나 /signup이 아니면(home등에 진입한상태)
    // isLogin 상태 true -> header에 프로필이미지 구현
    const currentPath = window.location.pathname;
    const isLoginPath =
      currentPath === "login" || currentPath === "signup" ? true : false;
    if (sessionStorage.getItem("access_token") && !isLoginPath) {
      setIsLogin(true);
      getUserProfile();
      setUserProfileImageLink(`/mypage/${sessionStorage.getItem("accountId")}`);
    } else {
      setIsLogin(false);
    }
  };

  const LoginGNB = () => {
    return (
      <div className="flex items-center ">
        <button
          onClick={onLogoutClick}
          className="px-3 py-1 mx-1 text-gray hover:bg-[#eee] rounded"
        >
          <Link to="/">로그아웃</Link>
        </button>
        <div className="items-center p-2 hover:bg-soGray-light">
          <a href={userProfileImageLink}>
            <img
              src={userProfileImage}
              alt="userProfile"
              width={25}
              height={25}
            ></img>
          </a>
        </div>
      </div>
    );
  };

  const LogoutGNB = () => {
    return (
      <>
        <button className="px-3 py-1 border rounded hover:bg-color-secondary-700 bg-buttonSecondary border-secondary-200">
          <Link to="/login" className="text-[hsl(205,47%,42%)]">
            Log in
          </Link>
        </button>
        <button className="px-2 py-1 mx-1 text-white border rounded hover:bg-buttonPrimaryHover bg-buttonPrimary border-secondary-300">
          <Link to="/signup">Sign up</Link>
        </button>
      </>
    );
  };

  const onClickremove = () => {
    sessionStorage.removeItem("searchText");
  };

  return (
    <div className="sticky top-0 z-20 flex-col w-full drop-shadow h-[60px] flex-nowrap">
      <div className="h-1 bg-primary-400"></div>
      <div className="flex justify-center items-center py-2 bg-soGray-headerbg">
        <div className="mx-2 my-1">
          <Link to="/" onClick={onClickremove}>
            <div
              className="ml-0 mr-4 w-[150px] h-[30px] bg-no-repeat bg-[0_-500px]"
              style={{ backgroundImage: `url(${sprites})` }}
            ></div>
          </Link>
        </div>

        <div className="text-sm text-[hsl(210,8%,35%)]">
          <a
            href="https://stackoverflow.co/"
            className="mr-4 hover:bg-[#eee] rounded-full hover:text-black px-1"
          >
            About
          </a>
          <a
            href="https://stackoverflow.co/"
            className="mr-4 hover:bg-[#eee] rounded-full hover:text-black px-1"
          >
            Products
          </a>
          <a
            href="https://stackoverflow.co/teams/"
            className="hover:bg-[#eee] rounded-full hover:text-black px-1"
          >
            For Teams
          </a>
        </div>
        <div className="flex items-center mx-2 bg-white border rounded-md grow border-soGray-light focus:ring-secondary-300 h-[36px]">
          <div className="flex mx-2 my-1 text-soGray-icon">
            {Icon(IconSearch)}
          </div>
          <input
            type="text"
            className="w-[calc(100%-40px)] focus:outline-none focus-visible:outline-none"
            placeholder="Search..."
          />
        </div>

        <div>{isLogin ? <LoginGNB /> : <LogoutGNB />}</div>
      </div>
    </div>
  );
}
