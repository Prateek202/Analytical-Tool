import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuery } from "../redux/querySlice";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";



const Input = ({ ...props }) => (
  <input {...props} className="p-2 border border-gray-300 rounded-lg w-full" />
);

const Button = ({ children, ...props }) => (
  <button {...props} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400">
    {children}
  </button>
);


const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.queries.loading);

  const handleSubmit = () => {
    if (query.trim()) dispatch(addQuery(query));
    setQuery("");
  };

  return (
    <div className="mb-4 p-4">
      <Input
        placeholder="Ask a business question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-2"
      />
      <Button onClick={handleSubmit} disabled={loading}>Submit</Button>
    </div>
  );
};

export default QueryInput;
