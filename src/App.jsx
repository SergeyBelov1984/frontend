import { useState } from "react";
import "./App.css";
import { useGetMebel } from "./hooks/useGetMebel";

function App() {
  const { data } = useGetMebel();

  return (
    <div>
      {data.map((element) => (
        <>
          <p>Идентификатор мебели: {element.id}</p>
          <p>Наименование: {element.name}</p>
          <p>Размер: {element.size}</p>
          <p>Цвет: {element.color}</p>
          <p>Склад: {element.warehouse}</p>
        </>
      ))}
    </div>
  );
}

export default App;
