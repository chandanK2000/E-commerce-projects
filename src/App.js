import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Cards/>}/>
        <Route exact path="/carts/:id" element={<CardDetails/>}/>

      </Routes>
    </>
  )
}

export default App;
