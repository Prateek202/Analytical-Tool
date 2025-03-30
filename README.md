# Business Analytical Tool

## Overview
The **Gen AI Query Dashboard** is a React-based analytics tool that allows users to query business data using natural language. It leverages mock data and Redux for state management while displaying results dynamically with charts.

## Features
- **Natural Language Query Input**: Users can enter queries like *"Show sales trend"* to get insights.
- **Query Processing Simulation**: Mock database processes user queries.
- **Results Visualization**: Displays text responses and charts using Chart.js.
- **Query History Tracking**: Keeps a log of past queries.
- **Redux State Management**: Manages query processing, results, and error handling.
- **Responsive UI**: Styled with Tailwind CSS.

## Tech Stack
- **Frontend**: React.js, Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Charts**: Chart.js, react-chartjs-2
- **Deployment**: Render

## Installation
### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git https://github.com/Prateek202/Analytical-Tool
   cd gen-ai-query-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:10000/
   ```


## Usage
- Enter a business-related query (e.g., *"Show sales trend"*) in the input field.
- Click **Submit** to process the query.
- The result will be displayed as text or a chart.
- Past queries are stored in the history section.

## Example Queries
- *"Show sales trend"* → Displays a line chart with sales data.
- *"Sales last month"* → Returns sales revenue for the last recorded month.
- *"New customers"* → Displays the number of new customers acquired.
- *"Top product"* → Shows the highest-selling product.

## Folder Structure
```
📂 gen-ai-query-dashboard
├── 📁 src
│   ├── 📁 components  # Reusable UI components
│   ├── 📁 redux       # Redux slices & store
│   ├── 📄 App.jsx     # Main App Component
│   ├── 📄 main.jsx    # Entry point
├── 📄 package.json    # Project metadata & dependencies
├── 📄 vite.config.js  # Vite configuration

```

## Live Link :

```
https://analytical-tool-4.onrender.com/
```
