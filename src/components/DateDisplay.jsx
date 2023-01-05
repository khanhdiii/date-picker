import "./datedisplay.css"
import moment from "moment"
const DateDisplay = (props) => {
    const { date } = props
    return (
        <section className="date-display">
            date display: {moment(date).format('ll')}
        </section>
    );
}

export default DateDisplay;