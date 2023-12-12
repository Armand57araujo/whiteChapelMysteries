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
            <div className="text-white row">
                <div className="col">
                <img src="assets/images/avatars/Alonso.jpg"/>
                <p>
                Alonso Ampuero
                </p>
                <ul className="contactList">
                    <li><a href="https://github.com">github</a></li>
                    <li><a href="https://linkedIn.com">linkedIn</a></li>
                    <li><a href="https://email.com">email</a></li>
                </ul>
                <div>
                </div>
                </div>
                <div className="col">
                <img src="assets/images/avatars/Armand.jpg"/>
                <p>
                Armand Araujo
                </p>
                <ul className="contactList">
                    <li><a href="https://github.com">github</a></li>
                    <li><a href="https://linkedIn.com">linkedIn</a></li>
                    <li><a href="https://email.com">email</a></li>
                </ul>
                </div>
                <div className="col">
                <img src="assets/images/avatars/Ian.jpg"/>
                <p>    
                Ian Sills                    
                </p>
                <ul className="contactList">
                    <li><a href="https://github.com">github</a></li>
                    <li><a href="https://linkedIn.com">linkedIn</a></li>
                    <li><a href="https://email.com">email</a></li>
                </ul>
                </div>
                </div>
                <div className='text-white row'>
                <div className="col">
                <img src="assets/images/avatars/Jack.jpg"/>
                <p>
                Jack Lunchick-Seymour
                </p>
                <ul className="contactList">
                    <li><a href="https://github.com">github</a></li>
                    <li><a href="https://linkedIn.com">linkedIn</a></li>
                    <li><a href="https://email.com">email</a></li>
                </ul>
                </div>
                <div className="col">
                <img src="assets/images/avatars/Tayla.jpg"/>
                <p>
                Tayla Rios
                </p>
                <ul className="contactList">
                    <li><a href="https://github.com">github</a></li>
                    <li><a href="https://linkedIn.com">linkedIn</a></li>
                    <li><a href="https://email.com">email</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;