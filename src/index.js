import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {

  return <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div >
}

function Header() {
  return <div className="header">
    <h1>Fast React Pizza Co.</h1>
  </div>
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {
        pizzas
          ? (
            <>
              <p>Authentic Italian pizzas.</p>
              <ul className="pizzas">
                {
                  pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))
                }
              </ul>
            </>
          )
          : <p>We are still working on our menu for you. Please come back later.</p>
      }
    </main>
  )
}

function Pizza({ pizzaObj }) {
  return <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
    <img src={pizzaObj.photoName} alt="spinaci-pizza" />
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD-OUT" : pizzaObj.price}</span>
    </div>
  </li>
}

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  })

  const hour = new Date().getHours();
  const openHr = 10;
  const closeHr = 22;

  const isOpen = hour >= openHr && hour <= closeHr;

  return (
    <footer className="footer">
      {isOpen ? <Order time={time} closeHr={closeHr} /> : "We are closed for now. Please come back after 10"}
    </footer>
  )
}

function Order(props) {
  return <div className="order">
    <p>{props.time}</p>
    <p>We are open until {props.closeHr}:00. Come and order.</p>
    <div className="btn">order</div>

  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)