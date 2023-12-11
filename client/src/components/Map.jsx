import { Link } from "react-router-dom";

const Map = (props) => {

    return(
        <div>
        <img className="mapBackground" src="assets/images/office/map.jpg"/>
        <h1> Map </h1>
       
        <button id="officeBtn" onClick={props.visibility}>Back To Office</button>

        </div>
    )
};

export default Map;