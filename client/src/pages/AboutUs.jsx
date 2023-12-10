import {Link} from 'react-router-dom'

const AboutUs = () => {

    return(
        <div className="container-fluid row text-center justify-content-center">
            <Link to="/">
            <button className="backBtn">Back</button>
            </Link>
            <h1 className="aboutHeader">
                About Us
            </h1>
            <p>
                White Chapel Mysteries is a game brought to you by the brilliant minds of:
            </p>
            <div className="row">
                <div className="col">
                <img src="assets/images/avatars/Alonso.jpg"/>
                <p>
                Alonso Ampuero
                </p>
                <div>
                </div>
                </div>
                <div className="col">
                <img src="assets/images/avatars/Armand.jpg"/>
                <p>
                Armand Araujo
                </p>
                </div>
                <div className="col">
                <img src="assets/images/avatars/Ian.jpg"/>
                <p>    
                Ian Sills                    
                </p>
                </div>
                </div>
                <div className='row'>
                <div className="col">
                <img src="assets/images/avatars/Jack.jpg"/>
                <p>
                Jack Lunchick-Seymour
                </p>
                </div>
                <div className="col">
                <img src="assets/images/avatars/Tayla.jpg"/>
                <p>
                Tayla Rios
                </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;