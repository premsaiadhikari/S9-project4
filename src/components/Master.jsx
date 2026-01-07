import { Link,useLocation } from "react-router-dom"
import "../components/styles.css"

function Master() {
    const location = useLocation();
    return (
        <>
            <div className="head">
                <Link to="/" state={{course:"cse"}}>Main</Link>
                <Link to="/home"  state={{course:"cse"}}>Home</Link>
                <Link to="/about" state={{course:"cse"}}>About</Link>
                <Link to="/contact"  state={{course:"cse"}}o>Contact</Link>
                <br></br>
                <p>im belongs to----{location.state?.course}</p>
                <h1>This is the main page u know!!!!</h1>
            </div>
        </>
    )
}

export default Master