import { Stack } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate, useParams } from "react-router-dom";
import Authentication from "../Service/Authentication";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function Delete() {
  const params = useParams();

  const DeleteEmployee = () => {
    // Authentication.Deletemp(params.employeeId).then((res) => {
    //   console.log(res.data);
    // });
    alert(params.employeeId);
    //getAllEmployees();
    console.log(params.employeeId);
    //navigate(`/delete/${employeeId}`);
  };
  return (
    <div>
      {/* <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <h3 className="text-center">
                Are you shore Do you want to delete?
              </h3>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <Stack direction="row" spacing={2}>
                <Button
                  color="primary"
                  className="rounded-pill"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => DeleteEmployee(params.employeeId)}
                >
                  Delete
                </Button>

                <Button
                  color="primary"
                  className="rounded-pill"
                  variant="outlined"
                  startIcon={<HomeIcon />}
                  onClick={() => DeleteEmployee(`${employeeId}`)}
                >
                  Cancel
                </Button>
              </Stack>

              <button type="button" className="btn btn-outline-primary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Delete;
