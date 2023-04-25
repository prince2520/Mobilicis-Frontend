import './TableHeading.scss';
const TableHeading = () => {

    return (
        <div className='table-heading' style={{fontSize:'1rem', fontWeight:'600'}}>
            <span style={{width:'5%'}}>S.No</span>
            <span style={{width:'10%'}}>First Name</span>
            <span style={{width:'10%'}}>Last Name</span>
            <span style={{width:'16%'}}>Email</span>
            <span style={{width:'10%'}}>Gender</span>
            <span style={{width:'6%'}}>Income</span>
            <span style={{width:'8%'}}>City</span>
            <span style={{width:'8%'}}>Car</span>
            <span style={{width:'15%'}}>Quote</span>
            <span style={{width:'12%'}}>Phone Price</span>
        </div>
    );

}
export  default TableHeading;