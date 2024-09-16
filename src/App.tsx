import Index from "./components/Index";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsePage from "./pages/UsePage";
function App() {
  return (
     <>
      <Router>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/use_effect" element={<UsePage />} />
       </Routes>
      </Router>
    </>
  );
}

export default App;
