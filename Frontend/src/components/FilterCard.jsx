import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { motion } from "framer-motion";
export default function FilterCard() {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);
  const filterData = [
    {
      filterType: "Location",
      array: ["Delhi", "Banglore", "Hyderabad", "Pune", "Mumbai", "Chakwal"],
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
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        {filterData.map((data, index) => (
          <div className="font-bold text-lg">
            {data.filterType}
            {data.array.map((item, idx) => {
              const itemId = `r${index}- ${idx}`;
              return (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-2 my-2"
                >
                  <RadioGroupItem id={itemId} value={item} />
                  <Label htmlFor={itemId}>{item}</Label>
                </motion.div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
