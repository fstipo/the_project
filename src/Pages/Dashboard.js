import { useEffect, useState, useRef } from 'react';
import MainTitle from '../Components/Main/MainTitle';
import { AgGridReact } from 'ag-grid-react';
import '../Components/Layout/Container/Container.css';
// import Modal from '../Components/Main/Modal';
import Modal2 from '../Components/Main/Modal';
import { Link } from 'react-router-dom';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Project = (props) => {
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState('');

  const handleClose = () => setShow(false);

  const modalHandler = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const data = selectedData[0];

    if (typeof data !== 'undefined') {
      setUserData(data);
      setUserData((state) => {
        setShow(true);
        return state;
      });
    } else {
      return;
    }
  };

  const onDetailsClick = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const data = selectedData[0];
    setUserData(data);
    props.onSave(data);
  };

  const details = (p) => (
    <button className="btn btn-link" onClick={onDetailsClick}>
      <Link to="/details">...details</Link>
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

  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const onGridReady = (e) => {
    e.api.sizeColumnsToFit();
    e.columnApi.resetColumnState();
  };

  return (
    <>
      <Modal2 show={show} handleClose={handleClose} data={userData} />
      <MainTitle name="Dashboard" icon="speedometer2" />
      <div className="container-fluid d-flex justify-content-center">
        <div className="table ag-theme-alpine" style={{ width: '100%' }}>
          <a
            href="#getSelectedRow"
            className="d-block m-3"
            role="button"
            aria-controls="sidebar"
            onClick={modalHandler}
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
