import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function RenderedDatePicker({setDate}) {
        const [startDate, setStartDate] = useState(new Date());

        const handleSubmit= (date) => {
          setDate(date);
          setStartDate(date);
        }
        
        return (
          <DatePicker className="bg-gray-300" shouldCloseOnSelect allowSameDay selected={startDate} onSelect={(date) => handleSubmit(date)} />
        );

}

export default RenderedDatePicker;