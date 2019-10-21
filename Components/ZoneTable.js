import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
});


export default function ZoneTable() {
  const classes = useStyles();
  const cellStyle = {borderRight:"1px solid rgba(0, 0, 0, 0.5)"};

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={cellStyle}>1</TableCell>
            <TableCell align="center" style={cellStyle}>2</TableCell>
            <TableCell align="center" style={cellStyle}>3</TableCell>
            <TableCell align="center" style={cellStyle}>4</TableCell>
            <TableCell align="center" style={cellStyle}>5</TableCell>
            <TableCell align="center" style={cellStyle}>6</TableCell>
            <TableCell align="center" style={cellStyle}>7</TableCell>
            <TableCell align="center">8</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </Paper>
  );
}
