import React, { useState } from "react";

import { Form } from "./components/Form/Form";
import { Diagram, UnitData } from "./components/Diagram/Diagram";

import "./App.css";

const AddData = [
  { id: 0, value: 10, label: "series A" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];

const App = () => {
  const [data, setData] = useState<UnitData[]>([]);

  const handleAddData = (label: string, value: string) => {
    setData((prev) => {
      return [
        ...prev,
        { id: prev.length, value: +value, label },
      ];
    });
  };

  return (
    <div className="App">
      <Form onSubmit={handleAddData} />
      <Diagram chartData={data} />
    </div>
  );
};

export { App };
