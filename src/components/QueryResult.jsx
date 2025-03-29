import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResult, processQuery } from "../redux/querySlice";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const QueryResult = () => {
  const dispatch = useDispatch();
  const { history, result, loading, error } = useSelector((state) => state.queries);

  useEffect(() => {
    if (history.length > 0) {
      setTimeout(() => {
        dispatch(setResult(processQuery(history[history.length - 1])));
      }, 1000);
    }
  }, [history, dispatch]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold">Result</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : result ? (
        result.type === "text" ? (
          <p>{result.data}</p>
        ) : (
          <Line
            data={{
              labels: result.data.map((d) => d.month),
              datasets: [
                {
                  label: "Revenue",
                  data: result.data.map((d) => d.revenue),
                  borderColor: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                },
              ],
            }}
          />
        )
      ) : (
        <p>No result yet.</p>
      )}
    </div>
  );
};

export default QueryResult;
