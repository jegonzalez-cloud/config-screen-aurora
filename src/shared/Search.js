import React, { useState, useEffect } from 'react';
import './shared.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';

//

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { FileUpload } from 'primereact/fileupload';

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
];

const Search = () => {
  //
  const [value1, setValue1] = useState(null);
  return (
    <div className="mt-4 mx-4">
      <Button
        label="Nuevo Registro"
        className="p-button-outlined p-button-prmiary mb-4"
      />
      <div class="grid">
        <div class="col">
          <span className="p-float-label">
            <InputNumber
              inputId="inputnumber"
              value={value1}
              onChange={(e) => setValue1(e.value)}
            />
            <label htmlFor="inputnumber">Codigo</label>
          </span>
        </div>
        <div class="col">
          <span className="p-float-label">
            <InputText
              id="inputtext"
              value={''}
              onChange={(e) => console.log(e.target.value)}
            />
            <label htmlFor="inputtext">Descripcion</label>
          </span>
        </div>
        <div class="col">
          <span className="p-float-label">
            <InputText
              id="inputtext"
              value={''}
              onChange={(e) => console.log(e.target.value)}
            />
            <label htmlFor="inputtext">InputText</label>
          </span>
        </div>
        <div class="col">
          <span className="p-float-label">
            <Dropdown
              inputId="dropdown"
              value={null}
              options={cities}
              onChange={(e) => console.log(e.value)}
              optionLabel="name"
            />
            <label htmlFor="dropdown">Dropdown</label>
          </span>
        </div>
        <div class="col">
          <span className="p-float-label">
            <Dropdown
              inputId="dropdown"
              value={null}
              options={cities}
              onChange={(e) => console.log(e.value)}
              optionLabel="name"
            />
            <label htmlFor="dropdown">Dropdown</label>
          </span>
        </div>
        <div class="col">
          <span className="p-float-label">
            <FileUpload
              mode="basic"
              name="demo[]"
              url="https://primefaces.org/primereact/showcase/upload.php"
              accept="image/*"
              maxFileSize={1000000}
              auto
              chooseLabel="Imagen logo"
            />
            {/* <label htmlFor="inputtext">Descripcion</label> */}
          </span>
        </div>
        <div class="col">
          <span className="p-float-label">
            <FileUpload
              mode="basic"
              name="demo[]"
              url="https://primefaces.org/primereact/showcase/upload.php"
              accept="image/*"
              maxFileSize={1000000}
              auto
              chooseLabel="Imagen menu"
            />
            {/* <label htmlFor="inputtext">InputText</label> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export { Search };
