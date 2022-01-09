import React, { useState } from 'react';
import './App.css';
import kazelabad from "./kazelabad1.png";

function RegularComponent() {
  return <h1>very secret.</h1>
}

function Header(props) {
  return (
    <header>
      <h1>{props.name} Eveveveveve</h1>
    </header>
  );
}

function Main(props) {
  const [liked, setLike] = useState("liked");
  return (
    <section>
      <p>Blajduwbidaiduebsisykd</p>
      <h1>this page is {liked} </h1>
      <img src={kazelabad} height={200} alt="Kazelabad"/>
      <section>
        <button onClick={() => setLike("liked")}>
          like
        </button>
        <button onClick={() => setLike("disliked")}>
          dislike
        </button>
      </section>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>hhahhahhahhahhahhah {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Happa",
  "Kappa",
  "Leckaschmecka"
];

const dishObjets = dishes.map((dish, i) => ({id: i, title: dish}));
//console.log(dishObjets);

function App(props) {
  if (props.authorized) { return (
    <div className = "App">
      <Header name = "Jabba"/>
      <Main dishes = {dishObjets}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
  } else {
    return <RegularComponent />;
  }
}

export default App;
