import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSideBar from "../components/RightSidebar";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function Home() {
  const [questionList, setQuestionList] = useState([]); // map때문에 배열 안넣어놓으면 에러 발생
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/hyobbeee/stack-overflow-db/test`)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setIsPending(false);
        setQuestionList(data);
      })
      .catch((error) => {
        setIsPending(false);
        throw Error(error.message);
      });
  }, []);

  if (isPending) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

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
          <div className="mr-6">
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
