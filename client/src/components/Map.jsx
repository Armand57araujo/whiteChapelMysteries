import { Link } from "react-router-dom";

let currentInventory = ['item1','item2','item3','item4','item5','item6']

const Map = (props) => {
    
    return(
        <div className="text-white">
        <img className="mapBackground" src="assets/images/office/map.jpg"/>
        <h1> Map </h1>
       
        {/* takes in visibility prop to "hide" page when clicking office button */}
        <button id="officeBtn" onClick={props.visibility}>Back To Office</button>

        {/* allows for map button visibility based on the items in the current inventory */}
        {currentInventory.length === 1 ? 
        <Link to="/mitresquare">
        <button className="mitreSquareBtn"> Mitre Square </button>
        </Link>
        : null}
        {currentInventory.length === 2 ? 
        <div> 
        <Link to="/mitresquare">
        <button className="mitreSquareBtn"> Mitre Square </button>
        </Link>
        <Link to="/druwardstreet"> 
        <button className="druwardStBtn"> Druward Street </button> 
        </Link>
        </div> 
        : null}
        {currentInventory.length === 3 ? 
        <div> 
        <Link to="/mitresquare">
        <button className="mitreSquareBtn"> Mitre Square </button>
        </Link>
        <Link to="/druwardstreet"> 
        <button className="druwardStBtn"> Druward Street </button> 
        </Link>
        <Link to="/dutfieldyard">
        <button className="dutfieldYardBtn"> {"<-- Dutfield Yard"} </button> 
        </Link>
        </div> 
        : null}
        {currentInventory.length === 4 ? 
        <div> 
        <Link to="/mitresquare">
        <button className="mitreSquareBtn"> Mitre Square </button>
        </Link>
        <Link to="/druwardstreet"> 
        <button className="druwardStBtn"> Druward Street </button> 
        </Link>
        <Link to="/dutfieldyard">
        <button className="dutfieldYardBtn"> {"<-- Dutfield Yard"} </button> 
        </Link>
        <Link to="/hanburystreet">
        <button className="hanburyStBtn"> Hanbury Street </button> 
        </Link>
        </div> 
        : null}
        {currentInventory.length === 5 ? 
        <div> 
        <Link to="/mitresquare">
        <button className="mitreSquareBtn"> Mitre Square </button>
        </Link>
        <Link to="/druwardstreet"> 
        <button className="druwardStBtn"> Druward Street </button> 
        </Link>
        <Link to="/dutfieldyard">
        <button className="dutfieldYardBtn"> {"<-- Dutfield Yard"} </button> 
        </Link>
        <Link to="/hanburystreet">
        <button className="hanburyStBtn"> Hanbury Street </button> 
        </Link>
        <Link to="/wharf">
        <button className="wharfBtn"> {"Wharf -->"} </button> 
        </Link>
        </div> 
        : null}
        {currentInventory.length === 6 ? 
        <div> 
        <Link to="/mitresquare">
        <button className="mitreSquareBtn"> Mitre Square </button>
        </Link>
        <Link to="/druwardstreet"> 
        <button className="druwardStBtn"> Druward Street </button> 
        </Link>
        <Link to="/dutfieldyard">
        <button className="dutfieldYardBtn"> {"<-- Dutfield Yard"} </button> 
        </Link>
        <Link to="/hanburystreet">
        <button className="hanburyStBtn"> Hanbury Street </button> 
        </Link>
        <Link to="/wharf">
        <button className="wharfBtn"> {"Wharf -->"} </button> 
        </Link> 
        <Link to="/dorsetstreet">
        <button className="dorsetStBtn">Dorset Street </button>
        </Link>
        </div> 
        : null}
        
        </div>
    )
};

export default Map;