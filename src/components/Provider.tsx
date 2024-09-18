import { createContext } from "react";
import Consumer from "./Consumer";
import SecondConsumer from "./SecondConsumer";

// import Consumer from "./Consumer";
// コンテキストのデフォルト値を指定して作成
const SampleContext = createContext({});

const Provider = () => {
  // 共有する状態を定義
  // const [sampleValue, setSampleValue] = useState("Hello, World!");
  const test ="test11111"
  return (
    // <p>
    //   aaaaaaaaaa
    // </p>
    // // コンテキストプロバイダーでラップし、値を提供
    <SampleContext.Provider value={{ test }}>
      <Consumer />
      <p>aaaaa</p>
      <SecondConsumer />
    </SampleContext.Provider>
  );
};

export { SampleContext, Provider };
