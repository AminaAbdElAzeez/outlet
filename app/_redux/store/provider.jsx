"use client";
import { Provider } from "react-redux";
import { store } from "./index";

function Provider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Provider;
