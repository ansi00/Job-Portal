import React from "react";
import Navbar from "./shared/Navbar.jsx";
import FilterCard from "./FilterCard.jsx";
import Job from "./Job.jsx";

export default function Jobs() {
  const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span>Jobs not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4 ">
                {jobsArray.map((item, index) => (
                  <div className="">
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
