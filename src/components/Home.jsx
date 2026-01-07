import { Link,useLocation} from "react-router-dom"
import "../components/styles.css"

function Home(){

    const location = useLocation();   
    return(
<div>
    
        <div className="head">
        <Link to="/" state={{course:"cse"}}>Main</Link>
                <Link to="/home"  state={{course:"cse"}}>Home</Link>
                <Link to="/about" state={{course:"cse"}}>About</Link>
                <Link to="/contact"  state={{course:"cse"}}o>Contact</Link>

        <br></br>
        <h1>This is Home page</h1>
         <p>im belongs to----{location.state?.course}</p>
        </div>  
        
      
     
    </div>
    )
}

export default Home