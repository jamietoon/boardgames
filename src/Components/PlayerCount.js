import {useState} from 'react';

function PlayerCount({setCount}) {

  const [players, setPlayers] = useState(1);

  const handleChange = (event) => {
    setPlayers(event.target.value);
    setCount(event.target.value);
    };

  return (
    <div>
      <input className="bg-gray-300" type="number" min="1" 
      value={players}
       onChange={(event) => handleChange(event)}/>
     
    </div>
  );
 
     
  
};

export default PlayerCount;