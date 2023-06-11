import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App' ;
import reportWebVitals from "./reportWebVitals";

const Heading = ()=>(
	<div>
		<h1 id="title" key="h1">
			heading 1
		</h1>
	</div>
);

const HeaderComponent = () => (
  <div>
    <Heading/>
    <h1>Hello world functional component</h1>
    <h2>this is h2 tag</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
