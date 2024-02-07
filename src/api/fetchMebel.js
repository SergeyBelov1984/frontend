import { useState } from "react";

export const FetchMebel = async () => {
  return fetch("http://localhost:8080").then((response) => response.json());
};

export default FetchMebel;
