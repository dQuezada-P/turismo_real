import { useState, createContext, useEffect } from "react";

const Loading = createContext();
const ContextLoading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
  },[]);

  return (
    <Loading.Provider
      value={{
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </Loading.Provider>
  );
};

export { ContextLoading };
export default Loading;