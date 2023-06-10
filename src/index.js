import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const heading = React.createElement(
  "h1",
  {
      id:"title",
  },
  "heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
      id:"title",
  },
  "heading 2"
);
const heading3 = React.createElement(
  "h3",
  {
      id:"title",
  },
  "heading 3"
);
const container = React.createElement(
  "div",
  {
  id:"container"
  },
  [heading, heading2, heading3]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
