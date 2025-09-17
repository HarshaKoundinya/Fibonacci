import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(10); // Default input value
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // This function is called when the form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
    setLoading(true);
    setResult(null);
    setError("");

    try {
      // Make a request to our C# API.
      // IMPORTANT: Make sure the port number matches the one your API is running on.
      const response = await fetch(
        `https://localhost:7042/api/fibonacci/${number}`
      );

      if (!response.ok) {
        // Handle errors from the API (like negative numbers)
        const errorText = await response.text();
        throw new Error(errorText || "Calculation failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci Calculator</h1>
        <p>
          Calculates <code>f(n) = f(n-1) + f(n-2) + f(n-4) + f(n-6)</code>
        </p>
        <form onSubmit={handleSubmit} className="fibo-form">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
            min="0"
            max="1000"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </form>

        {/* Display the result, loading state, or an error message */}
        <div className="result-area">
          {result !== null && (
            <h2>
              Result: <span>{result.toLocaleString()}</span>
            </h2>
          )}
          {error && <p className="error">{error}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
