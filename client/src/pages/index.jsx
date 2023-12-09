import {Link} from 'react-router-dom';

const Index = () => {

return(
    <>
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
                    <Link to="/aboutus">
                    <button className="font margin-top">About Us</button>
                    </Link>
                </div>
            </div>
        </div>

    </>

)

}

export default Index;