import { useState } from "react";
import "./datecontainer.css";
import DateDisplay from "./DateDisplay";
import moment from "moment"
import { useEffect } from "react";

const DateContainer = () => {
    const [date, setDate] = useState(moment(Date.now()).format('ll'))

    useEffect(() => {
        console.log("rendered");
    }, [date])

    return (
        <>"
            <input type="date" className="date-input" onChange={(e) => setDate(e.target.value)} />
            {console.log(date)}
            <DateDisplay date={date} />
        </>
    );
}

export default DateContainer;