import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Aboutme from "./components/Aboutme";
import MyCity from "./components/MyCity";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

        <Route index element={<Aboutme />} />
        <Route path="mycity" element={<MyCity />} />
        <Route path="*" element={<NotFound />} />


        </Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
