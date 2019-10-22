import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { OrdersContext, WeightContext } from "../Store";

const useStyles = makeStyles({
  root: {
    overflowX: "auto"
  },
  table: {
    minWidth: 250
  }
});

export default function ResultsTable() {

  const [orders] = useContext(OrdersContext);
  const [weight] = useContext(WeightContext);


  const classes = useStyles();
  const tableHeader = {backgroundColor: "lightgray"};
  const tableTotal = {backgroundColor: "black", color: "white"};

  return (
    <Paper className={classes.root}>

      <Table className={classes.table} aria-label="simple table">
        <TableRow>
          <TableCell>Billed Weight</TableCell>
          <TableCell style={tableHeader}>{orders * weight}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Avg. Shipping Time</TableCell>
          <TableCell style={tableHeader}>{(orders * weight * .9).toFixed(2)}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Avg. Per Parcel Cost</TableCell>
          <TableCell style={tableHeader}>${(orders * weight * .8).toFixed(2)}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Order Shipping Cost</TableCell>
          <TableCell style={tableHeader}>${(orders * weight * .13).toFixed(2)}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell><strong>Total Cost:</strong></TableCell>
          <TableCell style={tableTotal}>${(orders * weight * .6).toFixed(2)}</TableCell>
        </TableRow>
      </Table>
    </Paper>
  );
}
