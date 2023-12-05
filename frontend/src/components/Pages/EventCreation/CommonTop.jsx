import React from "react"
import pics from "./pic1.png"
import { Link, useHistory } from "react-router-dom"
const CommonTop = () => {

    const navigate = useHistory()
    
    const handleRedirect = () => {
        navigate.push("/home")
    }
    React.useEffect(() => {
        document.title = "Create a Meetup group - Meetup"
    })
    return (
        <div>
            <div>
                <div style={{margin:"10px auto", width:"fit-content"}}>
                    <img style={{ width: "11%", padding:"12px 16px"}} src={pics} alt="meet-up-logo" onClick={ handleRedirect}/>
                    <Link to="/"><button  style={{ float: "right", padding: "28px 20px", backgroundColor: "white", border: "0", cursor: "pointer" }} >Save and Exit</button></Link>
                </div>
                
            </div>
        </div>
        
    )
}

export { CommonTop }