import React, { useState } from 'react';

type Props = {
  onChange: (value: string) => void;
  onSubmit: () => void;
  value: string;
};

function SearchBar({ onSubmit, onChange, value }: Props) {
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          id="search"
          placeholder="Search for user name here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border mr-2 rounded px-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
