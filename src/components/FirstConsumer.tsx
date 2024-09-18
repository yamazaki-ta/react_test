import React from "react";
import SecondConsumer from "./SecondConsumer";
import { UseContextPage } from "../pages/UseContextPage";
const FirstConsumer = () => {
  return (
    <>
       <p>firstConsumer</p>
       <UseContextPage>
        <SecondConsumer />
       </UseContextPage>
    </>
  );
};

export default FirstConsumer;
