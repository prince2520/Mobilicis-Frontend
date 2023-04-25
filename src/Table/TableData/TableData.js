import React from "react";

import './TableData.scss';
const TableData = (props) => {
    return (
        <React.Fragment>
            <div className='table-data-mobile'>
                <div className="table-fields">
                    <label>S.No</label>
                    <span>{props.id + 1}</span>
                </div>
                <div className="table-fields">
                    <label>First Name</label>
                    <span>{props.data.first_name}</span>
                </div>
                <div className="table-fields">
                    <label>Last Name</label>
                    <span>{props.data.last_name}</span>
                </div>

                <div className="table-fields">
                    <label>Email</label>
                    <span>{props.data.email}</span>
                </div>

                <div className="table-fields">
                    <label>Gender</label>
                    <span>{props.data.gender}</span>
                </div>
                <div className="table-fields">
                    <label>Income</label>
                    <span>{props.data.income}</span>
                </div>
                <div className="table-fields">
                    <label>City</label>
                    <span>{props.data.city}</span>
                </div>
                <div className="table-fields">
                    <label>Car</label>
                    <span>{props.data.car}</span>
                </div>
                <div className="table-fields">
                    <label>Quote</label>
                    <span >{props.data.quote}</span>
                </div>
                <div className="table-fields">
                    <label>Phone Price</label>
                    <span>{props.data.phone_price}</span>
                </div>
            </div>
            <div className="table-data">
                <span style={{width:'5%'}}>{props.id + 1}</span>
                <span style={{width:'10%'}}>{props.data.first_name}</span>
                <span style={{width:'10%'}}>{props.data.last_name}</span>
                <span style={{width:'16%'}}>{props.data.email}</span>
                <span style={{width:'10%'}}>{props.data.gender}</span>
                <span style={{width:'6%'}}>{props.data.income}</span>
                <span style={{width:'8%'}}>{props.data.city}</span>
                <span style={{width:'8%'}}>{props.data.car}</span>
                <span style={{width:'15%'}}>{props.data.quote}</span>
                <span style={{width:'12%'}}>{props.data.phone_price}</span>
            </div>
        </React.Fragment>
    );

};

export default TableData;