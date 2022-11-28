import { useState, createContext } from "react";

export const SurveyContext = createContext();

function SurveyProvider({ children }) {
  const [data, setData] = useState(undefined);

  return (
    <SurveyContext.Provider value={{ data, setData }}>
      {children}
    </SurveyContext.Provider>
  );
}

export default SurveyProvider;
