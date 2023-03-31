import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      "location": "New York City",
      "latitude": 40.730610,
      "longitude": -73.935242,
      "date": "2022-06-01"
    },
    {
      "location": "Los Angeles",
      "latitude": 34.052235,
      "longitude": -118.243683,
      "date": "2022-06-05"
    },
    {
      "location": "Chicago",
      "latitude": 41.881832,
      "longitude": -87.623177,
      "date": "2022-06-10"
    }
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Location</TableCell>
            <TableCell className="tableCell">Latitude</TableCell>
            <TableCell className="tableCell">Longitude</TableCell>
            <TableCell className="tableCell">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.location}</TableCell>
              <TableCell className="tableCell">{row.latitude}</TableCell>
              <TableCell className="tableCell">{row.longitude}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
