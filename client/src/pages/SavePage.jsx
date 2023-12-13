import React, {useState} from "react";
import ButtonList from "../components/savebtnlist";
import { Link } from 'react-router-dom';

// create new save, and button data for each save
const Save = () => {
    const firstdataArray = [];
const [dataArray, setDataArray] = useState(firstdataArray);
const addSave = (event) => {
    event.preventDefault()
    if(dataArray.length <= 6){
    let count = dataArray.length;
    count++
    setDataArray([...dataArray, `save ${count}`])
    }
}
    return (
        <div>
            <img src="./assets/images/menu/scarychild.png" className="savescreenImage"></img>
            <div className="savescreenbanner ">
                <div>
                    <div>
                        <div>
                           <button onClick={addSave} className="saveborder">Create New Save</button> 
                        </div>
                        <div>
                            <Link to="/office">
                            <ButtonList data={dataArray} />
                            </Link>
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