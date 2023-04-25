import TableHeading from "./TableHeading/TableHeading";
import {useEffect, useState} from "react";
import {getData} from "../api";
import TableData from "./TableData/TableData";

import './Table.scss';
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {OverlayActions} from "../store/overlay";
import {TableDataActions} from "../store/tableData";

const Table = () => {
    const data = useSelector(state => state.tableData.data);
    const pageCount = useSelector(state => state.tableData.pageCount);
    const selectedPage = useSelector(state => state.tableData.selectedPage);
    const filterData = useSelector(state => state.filter.filterData);

    const dispatch = useDispatch();

    useEffect(()=>{
        getData(50, 1).then(result => {
            dispatch(TableDataActions.saveData(result.result));
            dispatch(TableDataActions.pageCountHandler(result.pageCount));
        }).catch(err=>console.log(err));
    },[dispatch]);

    const handlePageClick = (event) => {
        dispatch(TableDataActions.selectedPageHandler(event.selected));
        getData(50, event.selected+1, filterData).then(result => {
            dispatch(TableDataActions.saveData(result.result));
            dispatch(TableDataActions.pageCountHandler(result.pageCount));
        }).catch(err=>console.log(err));
    };

    return(
        <div className="table">
            <div  className="table-title">
                <span>Table</span>
            </div>
            <div className="table-container">
                <button className='filter' style={{alignSelf:'flex-start'}} onClick={()=>dispatch(OverlayActions.showFilterHandler())}>Filter</button>
                <TableHeading/>
                <div className='table-data-container'>
                    {
                        data && data.map((res, id)=><TableData id={((selectedPage)*50) + id} data={res}/>)
                    }
                    {data.length === 0 && <span style={{
                        marginTop:'2rem',
                        fontSize: '2rem',
                        fontWeight:'600',
                        color:'#f3795e'}}> No data found! </span>}
                </div>
                <div className='pagination-container'>
                    <ReactPaginate
                        className='pagination'
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        forcePage={selectedPage}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table;