
import {Link} from 'react-router-dom';

import LoginLogout from "../components/LoginLogoutButton";

const Index = () => {


return(
    <div>
     <img src="assets/images/menu/menu-background.jpg" className="homeBackground"/>
        <div className="title">
            <h1>White Chapel Mysteries</h1>
        </div>
        <div className="homeBanner">
            <div className="center">
                <div>
                    <h1 className="">Menu:</h1>
                </div>
                <div>
                    <LoginLogout />
                </div>
                <div>
                    <Link to="/aboutus">
                    <button className="font margin-top">About Us</button>
                    </Link>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    
    </div>

)

}

export default Index;