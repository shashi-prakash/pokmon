
import Header from "./components/header/Header";
import CardListItem from "./components/card/CardListItem";
import { Routes, Route } from "react-router-dom";
import AllList from "./components/card/AllList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardListItem />} />
        <Route path="/pokmon/:pokName" element={<AllList />} />
      </Routes>
    </>
  );
}

export default App;
