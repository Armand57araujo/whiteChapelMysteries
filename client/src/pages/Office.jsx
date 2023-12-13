import { Link } from "react-router-dom";
import { useState } from "react";
import Map from "../components/Map";
import Inventory from '../components/Inventory';
import Notepad from '../components/Notepad';
import AutoSave from '../components/autoSave'

const Office = () => {
    const [mapVisible, setMapVisible] = useState(false);
    const [inventoryVisible, setInventoryVisible] = useState(false);
    const [notesVisible, setNotesVisible] = useState(false);
    const hideShow = (event)=> {
        switch(event.target.id) {
            case 'mapBtn': if(notesVisible) {
                setNotesVisible(!notesVisible);
                setMapVisible(!mapVisible);
            } else {
                setMapVisible(!mapVisible);
            }
            break;
            case 'notesBtn': setNotesVisible(!notesVisible);
            break;
            case 'inventoryBtn': if(notesVisible) {
                setNotesVisible(!notesVisible);
                setInventoryVisible(!inventoryVisible);
            } else {
                setInventoryVisible(!inventoryVisible);
            }
            break;
            default: 
            break;
        } 
    }

    return(
        <div> 
            <AutoSave />
            <img className='officeBackground' src='assets/images/office/office1.jpg'/>

            <button id="mapBtn" onClick={hideShow}>
                Map
            </button>
            {mapVisible ? <Map visibility={() => setMapVisible(!mapVisible)}/> : null}

            <button id="notesBtn" onClick={hideShow}>
            {notesVisible ? "Close": null}   Notes
            </button>
            {notesVisible ? <Notepad visibility={() => setNotesVisible(!notesVisible)}/> : null}
            
            <button id="inventoryBtn" onClick={hideShow}>
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