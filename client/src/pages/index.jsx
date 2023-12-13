
import {Link} from 'react-router-dom';

import LoginLogout from "../components/LoginLogoutButton";
import Auth from '../utils/auth'


const Index = () => {

Auth.loggedIn() ? window.location.replace('saves') : null;

return(
    <div>
     <img src="assets/images/menu/menu-background.jpg" className="homeBackground"/>
        <div className="title">
            <h1>White Chapel Mysteries</h1>
        </div>
        <div className="homeBanner">
            <div className="center">
                <div>
                    <h1>Menu:</h1>
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