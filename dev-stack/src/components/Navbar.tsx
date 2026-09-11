import logo from "../assets/logo-text.png"

const navbar = () => {
    return (
        <div>

            <nav>
                <div className="mt-4 flex justify-between container mx-auto">
                    <img src={logo} alt="" />

                    <ul className="flex items-center gap-5 ">
                        <li className="text-[#DB2777]">HOME</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>


                    <div className="flex gap-7">
                        <button>Sign In</button>
                        <button className="text-white bg-[#D91B7E] rounded-4xl p-2">Sign Up</button>

                    </div>
                    
                    
                    

                </div>
            </nav>
            
        </div>
    );
};

export default navbar;