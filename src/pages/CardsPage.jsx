import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardsPage() {
  const [cards, setCards] = useState([]);

  const getAllCards = () => {

    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${import.meta.env.VITE_API_URL}/cards`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => setCards(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div className="CardsPage">



      {cards.map((card) => {
        return (
          <div className="CardsPageCard" key={card._id}>
            <Link to={`/cards/${card._id}`}>
              <h3>{card.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CardsPage;
