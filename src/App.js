import ModalPage from "./Pages/ModalPage.js";
import TablePage from "./Pages/TablePage.js";


function App () {

    return (
        <div>
            <div className="m-3">
            <ModalPage/>       
            </div>
            <div className="m-3 ">
            <TablePage/>
            </div>
        </div>
    )
};

export default App;