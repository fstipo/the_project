import { useEffect, useState, useRef } from 'react';
import MainTitle from '../Components/Main/MainTitle';
import { AgGridReact } from 'ag-grid-react';
import '../Components/Layout/Container/Container.css';
import Modal from '../Components/Main/Modal';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Project = (props) => {
  const gridRef = useRef(null);
  const [columnDefs] = useState([
    {
      field: 'first',
      checkboxSelection: true,
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'First Name',
      resizable: true,
      width: 150,
    },
    {
      field: 'last',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Last Name',
      resizable: true,
      width: 120,
    },
    {
      field: 'email',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Email',
      width: 220,
    },
    {
      field: 'address',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Full Name',
      width: 230,
    },
    {
      field: 'created',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Age',
      width: 165,
    },
    { field: 'balance', sortable: 'true', filter: 'true' },
  ]);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // fetch('https://www.ag-grid.com/example-assets/row-data.json')
    // fetch('https://jsonplaceholder.typicode.com/users')

    fetch(
      'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
    )
      .then((response) => response.json())
      .then((data) => setRowData(data));
  }, []);

  // const [rowData] = useState([
  //   {
  //     first: 'John',
  //     last: 'Grayner',
  //     full: 'John Grayner',
  //     age: 39,
  //     email: 'john@gmail.com',
  //   },
  //   {
  //     first: 'Franko',
  //     last: 'Stipanov',
  //     full: 'Franko Stipanov',
  //     age: 44,
  //     email: 'franko@gmail.com',
  //   },
  //   {
  //     first: 'Goran',
  //     last: 'Jakovljević',
  //     full: 'Goran Jakovljević',
  //     age: 43,
  //     email: 'goran@gmail.com',
  //   },
  //   {
  //     first: 'Mary',
  //     last: 'Black',
  //     full: 'Mary Black',
  //     age: 14,
  //     email: 'mary@gmail.com',
  //   },
  //   {
  //     first: 'Josipa',
  //     last: 'Stipanov',
  //     full: 'Josipa Stipanov',
  //     age: 43,
  //     email: 'josipa@gmail.com',
  //   },
  //   {
  //     first: 'Mike',
  //     last: 'Jordan',
  //     full: 'Mike Jordan',
  //     age: 55,
  //     email: 'mike@gmail.com',
  //   },
  //   {
  //     first: 'Johny',
  //     last: 'Lennon',
  //     full: 'Johny Lennon',
  //     age: 33,
  //     email: 'johnny@gmail.com',
  //   },
  //   { first: 'Marty', last: 'Moon', full: 'Marty Moon', age: 65 },
  //   {
  //     first: 'Victory',
  //     last: 'Hope',
  //     full: 'Victory Hope',
  //     age: 23,
  //     email: 'victory@gmail.com',
  //   },
  //   { first: 'Robert', last: 'Hill', full: 'Robert Hill', age: 98 },
  //   {
  //     first: 'Alan',
  //     last: 'Ford',
  //     full: 'Alan Ford',
  //     age: 19,
  //     email: 'alan@gmail.com',
  //   },
  //   {
  //     first: 'Sue',
  //     last: 'Ford',
  //     full: 'Sue Ford',
  //     age: 26,
  //     email: 'sue@gmail.com',
  //   },
  // ]);

  const [userData, setUserData] = useState('');
  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const onGridReady = (e) => {
    e.api.sizeColumnsToFit();
    e.columnApi.resetColumnState();
  };

  const onButtonClick = () => {
    const modal = document.querySelector('.modale');
    modal.style.display = 'block';
    getData();

    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  const getData = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const data = selectedData[0];
    console.log(data);
    setUserData(data);
  };

  // data={userData}

  return (
    <>
      <Modal close={props.onClick} data={userData}></Modal>
      <MainTitle name="Dashboard" icon="speedometer2" />
      <div className="container-fluid d-flex justify-content-center">
        <div className="table ag-theme-alpine" style={{ width: '100%' }}>
          <a
            href="#getSelectedRow"
            className="d-block m-3"
            role="button"
            aria-controls="sidebar"
            onClick={onButtonClick}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Get selected row
          </a>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            gridOptions={gridOptions}
            onGridReady={onGridReady}
            rowSelection="single"
          ></AgGridReact>
        </div>
      </div>
    </>
  );
};

export default Project;
