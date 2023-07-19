import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

interface CheckoutValidationContextType {
  isValid: boolean;
  setValidationState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckoutValidationContext = createContext<CheckoutValidationContextType>({
  isValid: false,
  setValidationState: () => {},
});

export const CheckoutValidationContextProvider = (props:PropsWithChildren) => {
  const [isValid, setValidationState] = useState<boolean>(false);

  return (
    <CheckoutValidationContext.Provider value={{ isValid, setValidationState }}>
      {props.children}
    </CheckoutValidationContext.Provider>
  );
};

export const useCheckoutValidationContext = () => {
  const { isValid, setValidationState } = useContext(CheckoutValidationContext);
  return { isValid, setValidationState };
};