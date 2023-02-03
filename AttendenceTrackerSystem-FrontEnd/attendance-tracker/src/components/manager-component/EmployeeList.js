import React from 'react'
import MUIDataTable from "mui-datatables";

const EmployeeList = () => {
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
      <div className="App wrapper">
        <h4>React MUI Datatable - FreakyJolly.com</h4>

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
