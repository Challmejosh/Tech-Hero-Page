const Navbar = () =>{
    //akashic record of bastard magic instructor
    return( 
        <header className="smallNav">
            <span className="firstSide">
                
                    <img src="./images/hugeicons_nano-technology.svg" alt="" />
                    <h1>KPAKA</h1>
                
            </span>

                <nav className="secondSize">
                    <div className="link-btn">
                        <a href="#home" className="links link">Home</a>
                        <a href="#product" className="links opt"><p>Product</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ri:arrow-drop-down-line">
                                <path id="Vector" d="M11.7571 17.344L7.75708 11.344L9.09104 9.34399L11.7571 13.344L14.4231 9.34399L15.7571 11.344L11.7571 17.344Z" fill="#E2F6F8"/>
                                </g>
                                </svg>
                        </a>
                        <a href="#service" className="links opt"><p>Service</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ri:arrow-drop-down-line">
                                <path id="Vector" d="M11.7571 17.344L7.75708 11.344L9.09104 9.34399L11.7571 13.344L14.4231 9.34399L15.7571 11.344L11.7571 17.344Z" fill="#E2F6F8"/>
                                </g>
                                </svg>
                        </a>
                        <a href="#contact" className="links">Contact</a>
                    </div>
                    <div className="registration">
                        <a href="#login" className="log">Log-in</a>
                        <a href="#signup" className="sign">Sign-up</a>
                    </div>
                </nav>
           {/*} <section className="secondSide">
                <div className="link-btn">
                    <a href="/" className="links link">Home</a>
                    <a href="/" className="links">Product</a>
                    <a href="/" className="links">Service</a>
                    <a href="/" className="links">Contact</a>
                    <div className="registration">
                        <a href="/" className="log">Log-in</a>
                        <a href="/" className="sign">Sign-up</a>
                    </div>
                </div>
                
            </section>*/}

            
        </header>
    )
}
export default Navbar;