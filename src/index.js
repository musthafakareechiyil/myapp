import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App' ;
import reportWebVitals from "./reportWebVitals";

const Title = () => (
  <a href="/">
    <div>
      <img class= "logo" alt="logo" src="https://foodvillages.com/img/icon-resized.jpg"></img>
    </div>
  </a>
);

const Header = () => (
	<div className="header">
		<Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
	</div>
);

const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off"
      },
      {
        offerName: "no delivery charge"
      }
    ]
  },
  {
    type: "restaurants",
    cards: [
      {
        offerName: "50% off"
      },
      {
        offerName: "no delivery charge"
      }
    ]
  }
]

const reataurantList = {
  name: "KFC",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/56c9ab92bd79745fd152a30fa2525426",
  cusines: ["Burgers ", "Biriyani", "American"],
  rating: "4.2"
}

const RestraundCard = () => {
  return (
    <div className="card">
      <img src={KFC.image} alt=""/>
      <h2>{KFC.name}</h2>
      <h3>{KFC.cusines.join(", ")}</h3>
      <h4>{KFC.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 
      <RestraundCard/> 

    </div>
  )
}

const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}

const Applayout = () => {
  return (
    <><Header /><Body /><Footer /></>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
