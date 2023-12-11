let currentInventory = ['item1','item2','item3','item4','item5']

const Inventory = (props) => {
    return(
        <div>
            <img className="inventoryBackground" src="assets/images/office/inventory.jpg"/>
            <h1>
                Inventory
            </h1>
            {/* takes in visibility prop to "hide" page when clicking office button */}
            <button id="officeBtn" onClick={props.visibility}>Back To Office</button>
        </div>
    )
}

export default Inventory;