const Inventory = (props) => {
    return(
        <div>
            <img className="inventoryBackground" src="assets/images/office/inventory.jpg"/>
            <h1>
                Inventory
            </h1>
            <button id="officeBtn" onClick={props.visibility}>Back To Office</button>
        </div>
    )
}

export default Inventory;