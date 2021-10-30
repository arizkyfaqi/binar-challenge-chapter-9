import { React } from "react";
import { Container, Stack } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./index.css";

// const columns = [
//   { id: "username", label: "Username" },
//   { id: "email", label: "Email" },
// ];

export default function StickyHeadTable(props) {
  //   const [page, setPage] = React.useState(0);
  //   const [rowsPerPage, setRowsPerPage] = React.useState(10);
  //   const [rows, setRows] = React.useState(JSON.parse(localStorage.getItem("rows")) || []);

  return (
    <Container>
      <Stack>
        <h2 className="leaderboard">Leaderboard</h2>
      </Stack>
      <div id="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fabio</td>
              <td>Rosso</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
