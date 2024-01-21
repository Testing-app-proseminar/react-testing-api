import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CardDetailsPage(props) {
  const [card, setCard] = useState(null);
  const { cardId } = useParams();

  const getCard = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/cards/${cardId}`)
      .then((response) => {
        const selectedCard = response.data;
        setCard(selectedCard);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div>
      {card && (
        <>
          <h1>{card.title}</h1>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h4>{card.status}</h4>
                  </td>
                  <td>
                    <h4>{card.topic}</h4>
                  </td>
                  <td>
                    <h4>{card.category}</h4>
                  </td>
                  <td>
                    <h6>{card.consumeTime}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p>{card.content}</p>
          </div>

          <button>
            <Link to={`${card.link}`}>Read more</Link>
          </button>
        </>
      )}

      <button>
        <Link to="/cards">Back to Study Cards</Link>
      </button>
      <button>
        <Link to={`/cards/${cardId}/edit`}>Edit card</Link>
      </button>
    </div>
  );
}

export default CardDetailsPage;
