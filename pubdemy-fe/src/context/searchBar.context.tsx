import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

interface SearchBarContextType {
  isEmpty: boolean;
  setSearchBarState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchBarContext = createContext<SearchBarContextType>({
  isEmpty: true,
  setSearchBarState: () => {},
});

export const SearchBarContextProvider = (props:PropsWithChildren) => {
  const [isEmpty, setSearchBarState] = useState<boolean>(true);

  return (
    <SearchBarContext.Provider value={{ isEmpty, setSearchBarState }}>
      {props.children}
    </SearchBarContext.Provider>
  );
};

export const useSearchBarContext = () => {
  const { isEmpty, setSearchBarState } = useContext(SearchBarContext);
  return { isEmpty, setSearchBarState };
};