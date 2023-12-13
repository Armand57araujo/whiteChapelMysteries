import React, { useState } from "react";
import ButtonList from "../components/savebtnlist";
import { GET_ME } from "../utils/queries";
import { SET_CURRENT, ADD_SAVE } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";


const Save = () => {
    const { loading , data } = useQuery(GET_ME);
    const [ setCurrent ] = useMutation(SET_CURRENT);
    const [ savePlus ] = useMutation(ADD_SAVE);
    const userData = data || {}
    const firstdataArray = data?.saves || [];
    const [dataArray, setDataArray] = useState(firstdataArray);

    const addSave = (event) => {
        event.preventDefault()
        if(dataArray.length <= 6){
            let count = dataArray.length;
            count++
            savePlus();
            setDataArray([...dataArray, `save ${count}`])
        }
    }

    const chooseSave = (event) => {
        event.preventDefault();
        const choice = event.target.id;
}
    return (
        <div>
            <img src="./assets/images/menu/scarychild.png" className="savescreenImage"></img>
            <div className="savescreenbanner ">
                <div>
                    <div>
                        <div>
                           <button onClick={addSave} className="saveborder">Save Game</button> 
                        </div>
                        <div>
                            <ButtonList data={dataArray} />
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