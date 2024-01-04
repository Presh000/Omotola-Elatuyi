import React from "react";

const ProgressBar = ({ progressBar }) => {
  return (
    <>
      {progressBar.map((progress, index, percent ) => (
        <div key={index} className="pb-5 ">
          <div key={index} className="pb-5">
            <div className="pb-3">{progress.title}</div>
          </div>
{percent === progress.percentage}
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "23%" }}
            ></div>
          </div>
        </div>
      ))}

      {progressBar.map((progress, index) => {
        <div key={index} className="pb-5">
          <div className="pb-3">{progress.title}</div>
        </div>;
      })}
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
