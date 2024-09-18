import Index from "./components/Index";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsePage from "./pages/UsePage";
import { Provider } from "./components/Provider";
import FirstConsumer from "./components/FirstConsumer";
import CountContextPage from "./pages/CountContextPage";

function App() {
  return (
     <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/use_effect" element={<UsePage />} />
          <Route path="/provider" element={<Provider />} />
          <Route path="/firstconsumer" element={<FirstConsumer />} />
          <Route path="/count_context_page" element={<CountContextPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
