import { IonSearchbar } from "@ionic/react";
import React from "react";

type Props = {
  searchText: string;
};
const SearchBar = ({ searchText }: Props) => {
  return (
    <>
      <IonSearchbar
        type="search"
        value={searchText}
        placeholder="Search...."
        clearIcon=""
      />
    </>
  );
};

export default SearchBar;
