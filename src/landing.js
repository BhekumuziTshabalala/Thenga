import "./landing.css"
import backgroundImage from "./assets/background_2.jpg"
import logo from "./assets/logo.png"
export default function Landing(){

    const imageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

    return (
        <main  style={imageStyle}> 
            <div id="image">
                <img src= {logo} id="logoImage" alt="logo" />   
            </div>

            <div id="side-panel">
                <h1 id="welcome-text">Welcome</h1>
                <div className="buttons">
                    <input type="button" value="Sign Up"  className="btn sign-up"/>
                </div>

                <div className="buttons">
                    <input type="button" value="Login"  className="btn login"/>
                </div>

                <div className="button-guest">
                    <input type="button" value="continue as guest" className="guest"/>
                </div>
                
            </div>

        </main>
    )

}