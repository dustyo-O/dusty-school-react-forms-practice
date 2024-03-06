import React, { FC } from "react";

import { cnDiagram } from "./Diagram.classname";
import { PieChart } from "@mui/x-charts/PieChart";

export type UnitData = {
  id: number;
  value: number;
  label: string;
};

type DiagramProps = {
  chartData: UnitData[];
};

const Diagram: FC<DiagramProps> = ({ chartData }) => {

  return (
    <div className={cnDiagram()}>
      <PieChart
        series={[
          {
            data: chartData,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export { Diagram };
