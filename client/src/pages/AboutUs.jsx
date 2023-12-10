import {Link} from 'react-router-dom'

const AboutUs = () => {

    return(
        <div>
            <Link to="/">
            <button className="backBtn">Back</button>
            </Link>
            <h1 className="aboutHeader">
                About Us
            </h1>
            <p>
                White Chapel Mysteries is a game brought to you by the brilliant minds of:
            </p>
            <div>
                <div>
                <img src="assets/images/avatars/Alonso.jpg"/>
                    Alonso Ampuero
                </div>
                <div>
                <img src="assets/images/avatars/Armand.jpg"/>
                    Armand Araujo
                </div>
                <div>
                <img src="assets/images/avatars/Ian.jpg"/>
                    Ian Sills
                </div>
                <div>
                <img src="assets/images/avatars/Jack.jpg"/>
                    Jack Lunchick-Seymour
                </div>
                <div>
                <img src="assets/images/avatars/Tayla.jpg"/>
                    Tayla Rios
                </div>
            </div>
        </div>
    )
}

export default AboutUs;