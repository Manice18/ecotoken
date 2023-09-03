import React from "react";
import { BarChart, Category } from "@/app/components";

function CategoryBarChartPairGroup({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="mx-auto mb-6 grid grid-flow-col grid-cols-1"
        >
          <div>
            <Category />
          </div>
          <div className="relative left-[2vh]">
            <BarChart />
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoryBarChartPairGroup;
