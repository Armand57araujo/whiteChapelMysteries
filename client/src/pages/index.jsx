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
                    <button className="font margin-topsml">Log In To Play</button>
                </div>
                <div>
                    <button className="font margin-top">About Us</button>
                </div>
                <div>
                    <LoginLogout></LoginLogout>
                </div>
            </div>
        </div>
    
    </div>


)




}



export default Index;