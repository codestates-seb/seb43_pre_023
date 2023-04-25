import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Card({ item }) {
  const relTimeFormat = (createdAt) =>
    moment(moment(createdAt) + 33193666).fromNow();

  return (
    <div className="w-auto p-4 pr-0 leading-7 text-left border-t text-md border-soGray-light">
      <div className="flex w-full">
        <div className="text-[13px] text-right mt-1 mr-6 shrink-0 grow-1 basis-[100px]">
          <div className="vote">{item.totalVote} votes</div>
          <div className="answer">{item.answerCount} answers</div>
          <div className="views">{item.viewCount} views</div>
        </div>
        <div className="flex flex-col flex-wrap shrink-1 grow-1 w-[calc(100%-105px)] basis-auto pl-1.5">
          <div className="text-[1.2rem] line-clamp-2 break-all w-full text-buttonPrimary font-semibold mb-2">
            <Link to={`/question/${item.id}`}>{item.title}</Link>
          </div>
          <div className="w-full mb-4 text-sm break-all line-clamp-2">
            {item.content &&
              item.content.replace(/"/g, "").replace(/<[^>]*>?/g, "")}
            {/* 문자열에서 모든 큰따옴표와 HTML 태그를 모두 제거한 결과를 반환 */}
          </div>

          <div className="w-full flex flex-row justify-end text-[13px] text-soGray-darker space-x-2">
            <Link
              to={`/mypage/${item.account.id}`}
              className="flex items-center mr-2"
            >
              {item.account.profile && item.account.profile !== "test/path" ? (
                <img
                  className="border border-buttonSecondary rounded w-[20px] h-[20px] mr-2"
                  src={item.account.profile}
                  alt={`${item.account.nickname}'s Avatar`}
                />
              ) : (
                <span className=" border border-buttonSecondary rounded w-[20px] h-[20px] mr-2"></span>
              )}
              <span className="font-semibold text-buttonPrimary">
                {item.account.nickname}
              </span>
            </Link>
            <time className="mr-4 s-user-card--time">
              <span className="mr-1 text-soGray-normal">Asked</span>
              <span className="text-soGray-darker" title={`${item.createdAt}`}>
                {relTimeFormat(item.createdAt)}
              </span>
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
