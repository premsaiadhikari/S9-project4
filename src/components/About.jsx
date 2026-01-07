import {Link,useLocation} from'react-router-dom'

function About() {
    const location = useLocation();
  return (
    <div>
    
        <div className="head">
         <Link to="/" state={{course:"cse"}}>Main</Link>
                <Link to="/home"  state={{course:"cse"}}>Home</Link>
                <Link to="/about" state={{course:"cse"}}>About</Link>
                <Link to="/contact"  state={{course:"cse"}}o>Contact</Link>
        <br></br>
       <p>im belongs to----{location.state?.course}</p>
            
        <h1>This is About page</h1>
        </div>  
        
      
      
    </div>
  )
}

export default About