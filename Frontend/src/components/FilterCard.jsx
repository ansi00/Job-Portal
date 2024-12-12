import React from "react";

export default function FilterCard() {
  const filterData = [
    {
      filterType: "Location",
      array: ["Delhi", "Banglore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
      filterType: "Industry",
      array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
      filterType: "Salary",
      array: ["0-40k", "42-1Lakh", "1 to 5Lakh"],
    },
  ];
  return (
    <div>
      <h1>Filter Jobs</h1>
      <hr className="mt-3" />
    </div>
  );
}
