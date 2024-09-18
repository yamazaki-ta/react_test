import React, { useContext } from "react";
import { SampleContext } from "./Provider";

const Consumer = () => {
//   const { sampleValue, setSampleValue } = useContext(SampleContext);
  const { test } = useContext(SampleContext);

  return (
    <div>
      {/* <p>Context Value: {sampleValue}</p>
      <button onClick={() => setSampleValue("New Value!")}>Change Value</button> */}
      {test}
    </div>
  );
};

export default Consumer;
