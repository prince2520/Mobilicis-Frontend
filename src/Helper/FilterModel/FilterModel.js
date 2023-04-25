import './FilterModel.scss';
import {useDispatch, useSelector} from "react-redux";
import {OverlayActions} from "../../store/overlay";
import {getData} from "../../api";
import {TableDataActions} from "../../store/tableData";
import {useRef, useState} from "react";
import {FilterActions} from "../../store/filter";

const FilterModel = () => {
    const filterData = useSelector(state => state.filter.filterData);

    const [carBrands, setCarBrands] = useState(filterData.carBrands);
    const dispatch = useDispatch();

    const carBrandRef = useRef(null);


    const applyFilterHandler = (event) => {
        event.preventDefault();

        let filter = {
            filter: true,
            incomeLessThan : event.target[0].value,
            carBrands: carBrands,
            gender : event.target[2].value,
            phonePriceGreaterThan  : event.target[3].value,
            lastNameStartWith : event.target[4].value,
            quoteLengthGreaterThan : event.target[5].value,
            emailIncludeDigits : event.target[6].value,
        };

        getData(50, 1, filter).then(result=>{
            dispatch(TableDataActions.selectedPageHandler(0));
            dispatch(FilterActions.saveFilterData(filter));
            dispatch(TableDataActions.saveData(result.result));
            dispatch(TableDataActions.pageCountHandler(result.pageCount));

            dispatch(OverlayActions.closeOverlayHandler());
        }).catch(err=>console.log(err));
    };

    return (
        <form onSubmit={(event) => applyFilterHandler(event)} className='filter-model'>
            <div className='filter-top'>
                <span className='heading'>Filter</span>
                <span className='close-button'
                      onClick={() => dispatch(OverlayActions.closeOverlayHandler())}>close</span>
            </div>

            <div className='filter-bottom'>
                <div className='income-filter'>
                    <span>Income ($) less than </span>
                    <input defaultValue={filterData.incomeLessThan} type='number' min={0}/>
                </div>
                <div className='income-filter'>
                    <span>Car brand </span>
                    <div className="add-brand">
                        <input ref={carBrandRef} style={
                            {
                                width:'65%',
                                marginRight:'0.25rem'
                            }}
                        />
                        <span onClick={()=>{
                            setCarBrands(oldArray=>[...oldArray, carBrandRef.current.value])
                            console.log(carBrands)
                        }
                        }>Add</span>
                    </div>
                </div>

                <div className='income-filter'>
                    <span>Gender</span>
                    <input defaultValue={filterData.gender}/>
                </div>

                <div className='income-filter'>
                    <span>Phone price greater than</span>
                    <input type='number' defaultValue={filterData.phonePriceGreaterThan}/>
                </div>
                <div className='income-filter'>
                    <span>Last name start with</span>
                    <input defaultValue={filterData.lastNameStartWith}/>
                </div>

                <div className='income-filter'>
                    <span>Quote character length greater than</span>
                    <input defaultValue={filterData.quoteLengthGreaterThan} type='number' min={0}/>
                </div>
                <div className='income-filter'>
                    <span>Email not include digits</span>
                    <select defaultValue={filterData.emailIncludeDigits}>
                        <option> False</option>
                        <option> True</option>
                    </select>
                </div>

            </div>
            <div className="brands-name">
                {carBrands.map(car=><span onClick={()=>{
                    setCarBrands(oldArray=>{
                        return oldArray.filter(res => res !== car);
                    })
                }
                }>{car}</span>)}
            </div>
            <button style={{alignSelf: "center", width: '50%'}} type='submit'>
                Save
            </button>
        </form>
    )
}

export default FilterModel;