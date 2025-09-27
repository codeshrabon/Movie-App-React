import { useState , useEffect } from "react";

const Card = ({movieTitle}) => {

 
  const [hasLiked, setHasLiked] = useState(false);

  const [count, setCount] = useState(0);

  useEffect( () => {
    console.log(`${movieTitle} has been liked: ${hasLiked}`)
  }, [hasLiked]);

// using dependency array [] we assure that when we render the element then it will work 



  return(
    <div className="card-style" onClick={() => setCount( (preCount) => preCount + 1)}>
      <h4>{movieTitle} <br /> {count}</h4>

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
