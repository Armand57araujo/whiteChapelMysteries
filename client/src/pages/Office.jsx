import { Link } from "react-router-dom";
import { useState } from "react";
import Map from "../components/Map";

const Office = () => {
    const [mapVisible, setMapVisible] = useState(false);

    return(
        <div>
            <img className='officeBackground' src='assets/images/office/office1.jpg'/>
            <button id="mapBtn" onClick={()=> setMapVisible(!mapVisible)}>
            {mapVisible ? "Hide" : "Show"}    Map
            </button>
            {mapVisible ? <Map visibility={() => setMapVisible(!mapVisible)}/> : null}
            <button id="notesBtn">Notes</button>
            <button id="inventoryBtn">Inventory</button>
            <Link to="/">
            <button id="backBtn">Back</button>
            </Link>
        </div>
    )
    };
    
    export default Office;