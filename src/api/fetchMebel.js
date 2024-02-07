import { useState } from "react";

export const FetchMebel = async () => {
  return fetch("http://178.154.202.222:8080").then((response) =>
    response.json()
  );
};

export default FetchMebel;
