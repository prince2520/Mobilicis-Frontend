import {OverlayActions} from "../../store/overlay";
import {useDispatch, useSelector} from "react-redux";
import FilterModel from "../FilterModel/FilterModel";


import './Overlay.scss';

const Overlay = () => {
    const dispatch = useDispatch();
    const showFilter = useSelector(state => state.overlay.showFilter);

    return (
        <div className="overlay-page">
            <div className="overlay-box" onClick={() => {
                dispatch(OverlayActions.closeOverlayHandler())
            }}/>
            {showFilter && <FilterModel/>}
        </div>
    );
};

export default Overlay;