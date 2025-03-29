import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const history = useSelector((state) => state.queries.history);

  return (
    <div className="mb-4 p-4">
      <h3 className="text-lg font-bold">Query History</h3>
      {history.length > 0 ? (
        <ul>
          {history.map((q, index) => (
            <li key={index} className="text-sm text-gray-600">{q}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No queries yet.</p>
      )}
    </div>
  );
};

export default QueryHistory;
