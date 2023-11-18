import "./styles.scss";
import React, { useState, useEffect } from "react";
import getImg from "./services/fetchimageList.js";
import SimpleList from "./components/SimpleList";

export default function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasEror, setHasError] = useState(false);

  const selectItem = (author) => {
    const filteredData = fetchedData.filter((item) => {
      if (item.author === author || author === "-1") {
        return item;
      }
    });
    setFilteredData(filteredData);
  };
  useEffect(() => {
    setLoading(true);
    getImg().then((data) => {
      setLoading(false);
      if (data instanceof Error) {
        setHasError(true);
      } else {
        setHasError(false);
        setFetchedData(data);
        setFilteredData(data);
      }
    });
  }, []);
  let returnValue = "...loading";
  if (!loading) {
    returnValue = hasEror ? (
      "FÄÄÄHler"
    ) : (
      <SimpleList
        selectItem={selectItem}
        optionsData={fetchedData}
        listData={filteredData}
      />
    );
  }

  return <div className="App">{returnValue}</div>;
}
