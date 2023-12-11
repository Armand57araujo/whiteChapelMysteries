const dataArray = ['item1', 'item2', 'item3', 'item4', 'item5']
import ButtonList from "../components/savebtnlist";

const Save = () => {
    return (
        <div>
            <img src="./assets/images/menu/savepageimage.jpg" className="savescreenImage"></img>
            <div className="savescreenbanner ">
                <div>
                    <div>
                        <div>
                            <h1 className="saveborder">Save Game</h1>
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