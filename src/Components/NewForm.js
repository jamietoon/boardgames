import { useState } from "react";
import DatePicker from "./DatePicker.js";
import PlayerCount from "./PlayerCount.js";
import Button from "../Components/button.js";

function NewForm ({onClickSubmit}) {

    const [title, setTitle] = useState("");

    const [date, setDate] = useState(Date());

    const [count, setCount] = useState(1);

    const [rating, setRating] = useState();

    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
      if (title !== ""){
      event.preventDefault();
      console.log ({title}, {date}, {count}, {rating});
      onClickSubmit(false);
      setError(false);
      } else {setError(true)};
       event.preventDefault()};
  
    const errorMessage = <div className="text-red-700">Title cannot be left blank</div>
      
  
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mt-5 mb-5'>
          
            <div>Title</div>
            <div><input className="bg-gray-300"
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
                />
            </div>
          
        </div>
        <div className='mt-5 mb-5'>
          <div>Date</div>
          <div><DatePicker setDate={setDate}/></div>
        </div>
        <div className='mt-5 mb-5'>
          <div>Players</div>
          <div><PlayerCount setCount={setCount}/></div>
        </div>
        <div className='mt-5 mb-5'>
          <div>Rating</div>
          <div><input className="bg-gray-300" type="number" min="1" max="10" onChange={(selRating) => setRating(selRating.target.value)} /></div>
        </div>
        <div className='mt-5 mb-5'>
          <Button>Create</Button>
        </div>
        {error && errorMessage}

      </form>
      
      </div>
    )
  
};

export default NewForm;