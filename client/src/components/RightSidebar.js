import {
  IconPencilSm,
  IconRemoteSm,
  IconSpeechBubbleRightSm,
} from "@stackoverflow/stacks-icons";
import React from "react";
import Icon from "../utils/inputIcon";

export default function RightSideBar() {
  const inputIcon = (icon) => {
    return <div dangerouslySetInnerHTML={{ __html: icon }}></div>;
  };

  return (
    <div className="flex-col px-3 py-6 text-xs">
      <ul className="bg-soGray-bg border border-solid border-[#F1E4BB] drop-shadow-md">
        <li className=" bg-[#FBF3D5] border-b border-[#F1E4BB] font-semibold p-2 block">
          The Overflow Blog
        </li>
        <li className="bg-[#FDF7E2] flex justify-center p-3">
          {Icon(IconPencilSm)}
          <div className="flex-shrink pl-2">
            <a href="https://stackoverflow.com/">
              We bought a university: how one coding school doubled down on
              brick and...
            </a>
          </div>
        </li>
      </ul>
      <ul className="bg-soGray-bg border-x border-solid border-[#F1E4BB] drop-shadow-md">
        <li className=" bg-[#FBF3D5] border-b border-[#F1E4BB] font-semibold p-2 block">
          Featured on Meta
        </li>
        <li className="bg-[#FDF7E2] flex justify-center px-3 pb-2 pt-3">
          {Icon(IconSpeechBubbleRightSm)}
          <div className="flex-shrink pl-2">
            <a href="https://stackoverflow.com/">
              Improving the copy in the close modal and post notices - 2023
              edition
            </a>
          </div>
        </li>
        <li className="bg-[#FDF7E2] flex justify-center pb-2 px-3">
          {Icon(IconSpeechBubbleRightSm)}
          <div className="flex-shrink pl-2">
            <a href="https://stackoverflow.com/">
              New blog post from our CEO Prashanth: Community is the future of
              AI
            </a>
          </div>
        </li>
        <li className="bg-[#FDF7E2] flex pb-2 px-3">
          {Icon(IconRemoteSm)}
          <div className="flex-shrink pl-2">
            <a href="https://stackoverflow.com/">
              Temporary policy: ChatGPT is banned
            </a>
          </div>
        </li>
        <li className="bg-[#FDF7E2] flex justify-center pb-3">
          {Icon(IconRemoteSm)}
          <div className="flex-shrink pl-2">
            <a href="https://stackoverflow.com/">
              The [protection] tag is being burninated{" "}
            </a>
          </div>
        </li>
      </ul>
      <ul className="bg-soGray-bg border border-solid border-[#F1E4BB] drop-shadow-md">
        <li className=" bg-[#FBF3D5] border-b border-[#F1E4BB] font-semibold p-2 block">
          The [protection] tag is being burninated
        </li>
        <li className="bg-[#FDF7E2] flex justify-center p-3">
          {Icon(IconPencilSm)}
          <div className="flex-shrink pl-2">
            <a href="https://stackoverflow.com/">
              We bought a university: how one coding school doubled down on
              brick and...
            </a>
          </div>
        </li>
      </ul>
      <a href="https://stackoverflow.com/">
        <span className="text-xxs text-buttonPrimary">Report this ad</span>
      </a>
    </div>
  );
}
