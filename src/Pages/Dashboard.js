import { useEffect, useState, useRef } from 'react';
import MainTitle from '../Components/Main/MainTitle';
import { AgGridReact } from 'ag-grid-react';
import '../Components/Layout/Container/Container.css';
import Modal from '../Components/Main/Modal';
import Modal2 from '../Components/Main/Modal2';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Project = (props) => {
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onClick2 = () => {
    getData();
    setShow(true);
  };

  const details = (p) => (
    <button
      className="btn btn-link"
      onClick={onClick2}
      onChange={onButtonClick}
    >
      ...details
    </button>
  );
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
      headerTooltip: 'Address',
      width: 230,
    },
    {
      field: 'created',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Created',
      width: 125,
    },
    { field: 'balance', sortable: 'true', filter: 'true', width: 165 },
    { field: 'details', headerTooltip: 'Details', cellRenderer: details },
  ]);

  useEffect(() => {
    // fetch('https://www.ag-grid.com/example-assets/row-data.json')
    // fetch('https://jsonplaceholder.typicode.com/users')

    fetch(
      'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
    )
      .then((response) => response.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

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
    const backdrop = document.getElementById('backdrop');
    modal.style.display = 'block';
    backdrop.classList.add('backdrop');
    getData();
  };

  const getData = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const data = selectedData[0];
    if (data) {
      setUserData(data);
    } else {
      return;
    }
  };

  return (
    <>
      <Modal2 show={show} handleClose={handleClose} data={userData} />
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
