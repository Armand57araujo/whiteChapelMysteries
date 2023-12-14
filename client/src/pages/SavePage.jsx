import React, { useEffect, useState } from "react";
import { GET_ME } from "../utils/queries";
import { SET_CURRENT, ADD_SAVE, REMOVE_SAVE } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import AutoSave from "../components/AutoSave";
import Auth from '../utils/auth';


const Save = () => {
    const { loading , data } = useQuery(GET_ME);
    const [ setCurrent ] = useMutation(SET_CURRENT);
    const [ savePlus ] = useMutation(ADD_SAVE);
    const [ removeSave ] = useMutation(REMOVE_SAVE);
    const firstdataArray = data?.me.saves || [];
    console.log(firstdataArray)
    const [dataArray, setDataArray] = useState(firstdataArray);

    const addSave = async (event) => {
        event.preventDefault()
        if(firstdataArray.length < 6){
            let count = firstdataArray.length;
            count++
            const newSave = await savePlus();
            console.log('newSave', newSave);
            setDataArray([...firstdataArray, `save ${count}`])
            localStorage.setItem('notes', '');
            let bag = [];
            localStorage.setItem('inventory', JSON.stringify(bag));
            Auth.updateToken(newSave.data.addSave.token)
            window.location.replace('/mitresquare')
        }
    }

    const chooseSave = async (event) => {
        event.preventDefault();
        let choice = parseInt(event.target.getAttribute('data-index'));

        const current = await setCurrent({variables: {location: choice}});

        if(!current) {
            throw new Error('something went wrong!');
        }
        console.log('current', current);
        Auth.updateToken(current.data.setCurrentSave.token);
        const tempSave = current.data.setCurrentSave.user.saves[choice]
        localStorage.setItem('notes', tempSave.notes);
        console.log('inventory', tempSave.inventory);
        localStorage.setItem('inventory', JSON.stringify(tempSave.inventory))
        window.location.replace('/office');
    }

    const handleLogout = (event) => {
        event.preventDefault();
        Auth.logout(); 
    };

    const deleteSave = async (event) => {
        event.preventDefault();
        let choice = parseInt(event.target.getAttribute('data-index'));
        
        const deleted = await removeSave({variables: {location: choice}});
        if(!deleted) {
            throw new Error('something went wrong!');
        }
    }

    return (
        <div>
            <AutoSave />
            <img src="./assets/images/menu/scarychild.png" className="savescreenImage"></img>
            <div className="savescreenbanner ">
                <div>
                    <div>
                        <div>
                           <button onClick={addSave} className="saveborder">New Game</button> 
                        </div>
                        <div className="logoutButton">
                        <button onClick={handleLogout} className="logoutButton">Logout</button>
                        </div>
                        <div>
                            {firstdataArray.map((item, index) => {                            
                                return (
                                    <div className="btn-group margin-top container d-flex align-items-center justify-content-center" role="group" key={`list-${index}`}>
                                    <button className='container d-flex align-items-center justify-content-center save-btn' data-index={index} key={index} onClick={chooseSave}>
                                        Save {index+1}<br/>inventory: {item.inventory.length} item(s) <br/> notes: {item.notes}
                                    </button>
                                    <button className="container d-flex align-items-center justify-content-center delete-btn" onClick={deleteSave} data-index={index} key={`delete-${index}`}>X</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

                export default Save;
                
                
                
                // const newArray = dataArray.map((item, index) => {
      
    // });
    // return <ButtonList>newbutton</ButtonList>
    //  setDataArray([...newArray])