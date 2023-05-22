import React, { createContext } from "react";

const UserDispatchContext = createContext<any>(null);

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { useUserDispatch };
