import { Link } from "react-router-dom";
import { useState } from "react";
import Map from "../components/Map";
import Inventory from '../components/Inventory';

const Office = () => {
    const [mapVisible, setMapVisible] = useState(false);
    const [inventoryVisible, setInventoryVisible] = useState(false);

    return(
        <div>
            <img className='officeBackground' src='assets/images/office/office1.jpg'/>

            <button id="mapBtn" onClick={()=> setMapVisible(!mapVisible)}>
                Map
            </button>
            {mapVisible ? <Map visibility={() => setMapVisible(!mapVisible)}/> : null}

            <button id="notesBtn">
                Notes
            </button>
            

            <button id="inventoryBtn" onClick={()=> setInventoryVisible(!inventoryVisible)}>
                Inventory
            </button>
            {inventoryVisible ? <Inventory visibility={()=> setInventoryVisible(!inventoryVisible)}/> : null}

            <Link to="/">
            <button id="backBtn">Back</button>
            </Link>
        </div>
    )
    };
    
    export default Office;