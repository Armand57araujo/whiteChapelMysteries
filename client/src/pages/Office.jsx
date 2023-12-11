import { Link } from "react-router-dom";

const Office = () => {
    return(
        <div>
            <img className='officeBackground' src='assets/images/office/office1.jpg'/>
            <button id="mapBtn">Map</button>
            <button id="notesBtn">Notes</button>
            <button id="inventoryBtn">Inventory</button>
            <Link to="/">
            <button id="backBtn">Back</button>
            </Link>
        </div>
    )
    };
    
    export default Office;