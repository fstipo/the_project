import { useState } from 'react';
import MainTitle from '../Components/Main/MainTitle';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Project = () => {
  const [columnDefs] = useState([
    { field: 'first' },
    { field: 'last' },
    { field: 'full' },
    { field: 'age' },
  ]);

  const [rowData] = useState([
    { first: 'John', last: 'Grayner', full: 'John Grayner', age: 39 },
    { first: 'Franko', last: 'Stipanov', full: 'Franko Stipanov', age: 44 },
    { first: 'Goran', last: 'Jakovljević', full: 'Goran Jakovljević', age: 43 },
    { first: 'Mary', last: 'Black', full: 'Mary Black', age: 14 },
    { first: 'Josipa', last: 'Stipanov', full: 'Josipa Stipanov', age: 43 },
    { first: 'Mike', last: 'Jordan', full: 'Mike Jordan', age: 55 },
    { first: 'Johny', last: 'Lennon', full: 'Johny Lennon', age: 33 },
    { first: 'Marty', last: 'Moon', full: 'Marty Moon', age: 65 },
    { first: 'Victory', last: 'Hope', full: 'Victory Hope', age: 23 },
    { first: 'Robert', last: 'Hill', full: 'Robert Hill', age: 98 },
    { first: 'Alan', last: 'Ford', full: 'Alan Ford', age: 19 },
    { first: 'Sue', last: 'Ford', full: 'Sue Ford', age: 26 },
  ]);

  return (
    <>
      <MainTitle name="Dashboard" icon="speedometer2" />
      <div className="container-xl mx-5">
        <div className="ag-theme-alpine" style={{ height: 800, width: 800 }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      </div>
    </>
  );
};

export default Project;
