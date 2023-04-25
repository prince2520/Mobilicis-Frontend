import './App.css';
import Table from "./Table/Table";
import Overlay from "./Helper/Overlay/Overlay";
import {useSelector} from "react-redux";

function App() {

    const showOverlay = useSelector(state => state.overlay.showOverlay)

    return (
        <div className="App">
            {showOverlay && <Overlay/>}
            <Table/>
        </div>
    );
}
export default App;
