import AddCard from "../components/AddCard";
import IsPrivate from "../components/IsPrivate";

function HomePage() {
    return (
      <div>
        <h1>Testing app Proseminar</h1>

        <IsPrivate><AddCard/></IsPrivate>
      </div>
    );
  }
   
  export default HomePage;