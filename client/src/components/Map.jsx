let currentInventory = ['item1','item2','item3','item4','item5','item6']

const Map = (props) => {
    
    return(
        <div>
        <img className="mapBackground" src="assets/images/office/map.jpg"/>
        <h1> Map </h1>
       
        {/* takes in visibility prop to "hide" page when clicking office button */}
        <button id="officeBtn" onClick={props.visibility}>Back To Office</button>

        {/* allows for map button visibility based on the items in the current inventory */}
        {currentInventory.length === 1 ? 
        <button className="mitreSquareBtn"> Mitre Square </button>
        : null}
        {currentInventory.length === 2 ? 
        <div> 
        <button className="mitreSquareBtn"> Mitre Square </button> 
        <button className="druwardStBtn"> Druward Street </button> 
        </div> 
        : null}
        {currentInventory.length === 3 ? 
        <div> 
        <button className="mitreSquareBtn"> Mitre Square </button> 
        <button className="druwardStBtn"> Druward Street </button>
        <button className="dutfieldYardBtn"> {"<-- Dutfield Yard"} </button> 
        </div> 
        : null}
        {currentInventory.length === 4 ? 
        <div> 
        <button className="mitreSquareBtn"> Mitre Square </button> 
        <button className="druwardStBtn"> Druward Street </button>
        <button className="dutfieldYardBtn"> {"<-- Dutfield Yard"}</button>
        <button className="hanburyStBtn"> Hanbury Street </button> 
        </div> 
        : null}
        {currentInventory.length === 5 ? 
        <div> 
        <button className="mitreSquareBtn"> Mitre Square </button> 
        <button className="druwardStBtn"> Druward Street </button>
        <button className="dutfieldYardBtn">{"<-- Dutfield Yard"} </button>
        <button className="hanburyStBtn"> Hanbury Street </button>
        <button className="wharfBtn"> {"Wharf -->"} </button> 
        </div> 
        : null}
        {currentInventory.length === 6 ? 
        <div> 
        <button className="mitreSquareBtn"> Mitre Square </button> 
        <button className="druwardStBtn"> Druward Street </button>
        <button className="dutfieldYardBtn">{"<-- Dutfield Yard"} </button>
        <button className="hanburyStBtn"> Hanbury Street </button>
        <button className="wharfBtn"> {"Wharf -->"} </button> 
        <button className="dorsetStBtn">Dorset Street </button>
        </div> 
        : null}
        
        </div>
    )
};

export default Map;