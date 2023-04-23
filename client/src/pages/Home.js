import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSideBar from "../components/RightSidebar";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function Home() {
  const [questionList, setQuestionList] = useState([]);
  const [isPending, setIsPending] = useState(true);

  /*   if (isPending) {
    return (
      <div>
        <Loading />
      </div>
    );
  } */

  return (
    <div className="so-main-wrapper flex flex-col">
      <div className="flex mx-auto my-0 w-[1400px]">
        <nav className="sticky max-h-[calc(100vh-180px)] top-[60px] w-[164px] flex-grow-0 flex-shrink-0 basis-[164px]">
          <LeftSidebar />
        </nav>
        <div className="so-main-content so-with-both-side border-r-white">
          <div className="flex flex-row border-b-white items-center justify-between px-6 py-8">
            <h2 className="text-xxl">Top Questions</h2>
            <Link
              to="/question/create"
              className="so-button-primary hover:bg-secondary-400"
            >
              Ask Question
            </Link>
          </div>
          <div className="mr-6 border-t border-soGray-light">
            {questionList && (
              <div className="questionList">
                {questionList.map((card) => (
                  <Card key={card.id} item={card} />
                ))}
              </div>
            )}
          </div>
        </div>
        <aside className="flex-grow flex-shrink-0 basis-[280px]">
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
}
