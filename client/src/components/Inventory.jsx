let currentInventory = ['item1','item2','item3','item4','item5']

const Inventory = (props) => {

    // const bag = JSON.parse(localStorage.getItem('inventory')) || [];
    const bag = [{itemName: 'bolt', description: 'description'},{itemName: 'bolt', description: 'description'}];
    

    return(
        <div className="inventoryBackground container-fluid">
            <div className="row justify-content-center">
                <div className="col-2">
                    {/* takes in visibility prop to "hide" page when clicking office button */}
                    <button id="officeBtn" onClick={props.visibility}>Back To Office</button>
                </div>
                <div className="col-4 inventory-title">
                    <h1 className="z-4">
                        Inventory
                    </h1>    
                </div>
            </div>
            
            {bag.length < 1 ? (<div>No Items to show</div>):<div className='inventory-list container align-items-center justify-content-center'>
                {bag.map((item) => {
                console.log(item);
                return (
                <div className="">
                    <div className="inventory-item margin-top container d-flex align-items-center justify-content-center" >
                        Item: {item.itemName}<br/> Description: {item.description} 
                    </div>
                </div>
                )
            })}
            </div>}
            
        </div>
    )
}

export default Inventory;