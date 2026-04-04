import React, { createContext, useContext } from "react";
import { BRAND } from "./brandConfig";

const BrandContext = createContext(BRAND);

export function BrandProvider({ children }) {
  return (
    <BrandContext.Provider value={BRAND}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  return useContext(BrandContext);
}