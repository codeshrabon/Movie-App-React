import { useState } from "react";

const Card = ({movieTitle}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return(
    <div className="card-style">
      <h4>{movieTitle}</h4>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '💛'}
      </button>

    </div>
    
  );
}


const App = ()=> {
  return(
    <div className="card-container">
      {/* <h2> Movie Lovers</h2> */}
    <Card movieTitle = "King Ping"/>
    <Card movieTitle = "King Kong"/>
    <Card movieTitle = "Breaking Bad"/>
    </div>
    
  );
}

export default App
