import React from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || "Search..."}
      style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid #ccc" }}
    />
  );
};

export default Search; 