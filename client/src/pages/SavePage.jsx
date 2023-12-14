import React, { useEffect, useState } from "react";
import { GET_ME } from "../utils/queries";
import { SET_CURRENT, ADD_SAVE } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import AutoSave from "../components/AutoSave";
import Auth from '../utils/auth';


const Save = () => {
    const { loading , data } = useQuery(GET_ME);
    const [ setCurrent, {error} ] = useMutation(SET_CURRENT);
    const [ savePlus ] = useMutation(ADD_SAVE);
    const firstdataArray = data?.me.saves || [];
    console.log(firstdataArray)
    const [dataArray, setDataArray] = useState(firstdataArray);

    const addSave = (event) => {
        event.preventDefault()
        if(firstdataArray.length < 6){
            let count = firstdataArray.length;
            count++
            savePlus();
            setDataArray([...firstdataArray, `save ${count}`])
            window.location.replace('/mitresquare')
        }
    }

    const chooseSave = async (event) => {
        let choice = parseInt(event.target.getAttribute('data-index'));
        console.log(`Clicked button`, choice);
        console.log('typeof', typeof 2);

        const current = await setCurrent({variables: {location: choice}});

        if(!current) {
            throw new Error('something went wrong!');
        }
        console.log('current', current);
        const tempSave = current.data.setCurrentSave.user.saves[choice]
        localStorage.setItem('notes', tempSave.notes);
        console.log('inventory', tempSave.inventory);
        localStorage.setItem('inventory', JSON.stringify(tempSave.inventory))
        window.location.replace('/office');
    }

    const handleLogout = () => {
        Auth.logout(); 
    };
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
                                console.log('item', item);
                            
                                return (
                                    <button className='margin-top container d-flex align-items-center justify-content-center' data-index={index} key={index} onClick={chooseSave}>
                                        Save {index+1}<br/>inventory: {item.inventory.length} item(s) <br/> notes: {item.notes}
                                    </button>
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