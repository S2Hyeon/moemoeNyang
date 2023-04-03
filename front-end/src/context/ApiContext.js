import { createContext, useContext } from "react";
import FakeApi from "./../services/FakeApi";
import FakeApiClient from "./../services/FakeApiClient";

export const ApiContext = createContext();

const client = new FakeApiClient();
const api = new FakeApi(client);

export function ApiProvider({ children }) {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
}

export function useApi() {
  return useContext(ApiContext);
}
