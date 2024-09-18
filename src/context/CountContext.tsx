import React, { createContext, useState } from "react";

// コンテキストの作成
export const SampleObject = createContext<{
  Count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  Count: 0,
  setCount: () => {},
});

export const CountContext = ({ children }: { children: React.ReactNode }) => {
  const [Count, setCount] = useState<number>(0);

  return (
    <SampleObject.Provider value={{ Count, setCount }}>
      {children}
    </SampleObject.Provider>
  );
};
