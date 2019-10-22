import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    overflowX: "auto"
  },
  table: {
    minWidth: 250
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function ResultsTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>

      <Table className={classes.table} aria-label="simple table">
        <TableRow>
          <TableCell>Billed Weight</TableCell>
          <TableCell>1234</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Avg. Shipping Time</TableCell>
          <TableCell>1234</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Avg. Per Parcel Cost</TableCell>
          <TableCell>1234</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Order Shipping Cost</TableCell>
          <TableCell>1234</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Your Cost:</TableCell>
          <TableCell>1234</TableCell>
        </TableRow>
      </Table>
    </Paper>
  );
}
