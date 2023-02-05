import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeList = () => {
  const [fromDate, setFromDate] = useState(new Date());

  const handleFrom = (date) => {
    setFromDate(date);
    console.log(fromDate);
  };
  const [toDate, setToDate] = useState(new Date());

  const handleTo = (date) => {
    setToDate(date);
    console.log(toDate);
  };
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <div>
      <div className="App wrapper container">
        <h1 className="mt-3" style={{textAlign:"center"} }>Manager Page</h1>

        <div className="mb-5 mt-4">
          Employee List
          <select
            class="form-control custom-select d-inline-block me-3"
            style={{ height: "40px", width: "200px" }}
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          start date
          <div className="d-inline-block  me-3">
            
            <ReactDatePicker
              className="custom-date-picker"
              selected={fromDate}
              onChange={handleFrom}
              name="startDate"
              dateFormat="MM/dd/yyyy"
            />
          </div>
          end date
          <div className="d-inline-block  me-3">
            
            <ReactDatePicker
              className="custom-date-picker "
              selected={toDate}
              onChange={handleTo}
              name="startDate"
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>

        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default EmployeeList;
