import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 400
  }
});

function createData(
  format,
  label,
  zone2,
  zone3,
  zone4,
  zone5,
  zone6,
  zone7,
  zone8
) {
  return { format, label, zone2, zone3, zone4, zone5, zone6, zone7, zone8 };
}

const resultsRow = [
  createData(
    "currency",
    "Total cost per zone",
    14.99,
    17.59,
    19.51,
    23.15,
    28.58,
    33.51,
    39.41
  ),
  createData("percentage", "% of parcels per zone", 7, 12, 17, 23, 26, 32, 36)
];

export default function ZoneTable() {
  const classes = useStyles();
  const cellStyle = { borderRight: "1px solid rgba(0, 0, 0, 0.5)" };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={cellStyle}>
              Zones
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              2
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              3
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              4
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              5
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              6
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              7
            </TableCell>
            <TableCell align="center">8</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultsRow.map(row => (
            <TableRow key={row.label}>
              <TableCell align="center" style={cellStyle}>
                {row.label}
              </TableCell>
              <TableCell align="center" style={cellStyle}>
                {row.format === "currency" ? "$" + row.zone2 : row.zone2 + "%"}
              </TableCell>
              <TableCell align="center" style={cellStyle}>
                {row.format === "currency" ? "$" + row.zone3 : row.zone3 + "%"}
              </TableCell>
              <TableCell align="center" style={cellStyle}>
                {row.format === "currency" ? "$" + row.zone4 : row.zone4 + "%"}
              </TableCell>
              <TableCell align="center" style={cellStyle}>
                {row.format === "currency" ? "$" + row.zone5 : row.zone5 + "%"}
              </TableCell>
              <TableCell align="center" style={cellStyle}>
                {row.format === "currency" ? "$" + row.zone6 : row.zone6 + "%"}
              </TableCell>
              <TableCell align="center" style={cellStyle}>
                {row.format === "currency" ? "$" + row.zone7 : row.zone7 + "%"}
              </TableCell>
              <TableCell align="center">
                {row.format === "currency" ? "$" + row.zone8 : row.zone8 + "%"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
