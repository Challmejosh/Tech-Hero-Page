const Hero = () => {
    return ( 
        <div className="hero">
            <div className="hero-message">
                <div className="first-writeup">
                    <p>Smart Solutions for a Digital <span className="world">World</span></p>
                </div>
                <div className="second-writeup">
                    <p>Enhance your capabilities with our intelligent AI-driven solutions.</p>
                </div>
            </div>
            <div className="btn">
                <button><p>Learn More</p></button>
                <button className="btnGet"><p className="get">Get Started</p></button>
            </div>
        </div>
     );
}
 
export default Hero;
