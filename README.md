# Fibonacci  Calculator

A web app to calculate a Fibonacci sequence using a C#/.NET backend and a React frontend. The sequence is defined by `f(n) = f(n-1) + f(n-2) + f(n-4) + f(n-6)`.

## Technologies Used
* **Backend**: C# with ASP.NET Core Web API (.NET 8)
* **Frontend**: React with Vite
* **Language**: C#, JavaScript

## How to Run This Project

You will need two terminals to run this application.

### 1. Run the Backend API
''' bash

cd Fibonacci.Api
dotnet run --launch-profile https

The API will be running on https://localhost:7042.

2. Run the Frontend UI
''' bash

cd fibonacci-ui
npm install
npm run dev

The UI will be running on http://localhost:5173.

