import React, { useState } from "react";
import { Input, Label, Menu, MenuItem } from "../index";

interface TypeAheadProps {
  onMenuSelect: (e: any) => void;
  label: string;
  data?: any[] | null;
  error: boolean;
}

const Typeahead: React.FC<TypeAheadProps> = ({
  onMenuSelect,
  label,
  data,
  error,
}) => {
  let [searchParam, setSearchParam] = useState<string>("");
  let [collapse, setCollapse] = useState<boolean>(true);
  let [results, setResults] = useState<any>([]);

  let onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollapse(false);
    setSearchParam(e.target.value);
    if (!data) {
      return setResults(null);
    }

    let filteredData = data.filter((item: any) => {
      return item.name.includes(e.target.value);
    });
    setResults(filteredData);
  };

  let renderMenuItems = (results: any) => {
    debugger;
    if (!results.length && searchParam.length) {
      return <MenuItem>No Results</MenuItem>;
    }

    // prevent clearing input from trying to map an empty result
    if (results.length) {
      debugger;
      return results.map((result: any) => (
        <MenuItem key={result.id} onSelect={() => onMenuItemSelect(result)}>
          {result.name}
        </MenuItem>
      ));
    }

    return [];
  };

  let onMenuItemSelect = (menuItem: any) => {
    setSearchParam(menuItem.name);
    onMenuSelect(menuItem);
    setCollapse(true);
  };

  return (
    <>
      <Label name={label} error={error} />
      <Input
        error={error}
        name="typeahead"
        value={searchParam}
        onChange={onInputChange}
        placeholder="type to search"
      />
      {!error && <Menu hide={collapse}>{renderMenuItems(results)}</Menu>}
    </>
  );
};

export default Typeahead;
