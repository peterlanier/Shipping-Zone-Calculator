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

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{borderRight:"1px solid #808080"}}>1</TableCell>
            <TableCell align="center" style={{borderRight:"1px solid #808080"}}>2</TableCell>
            <TableCell align="center" style={{borderRight:"1px solid #808080"}}>3</TableCell>
            <TableCell align="center" style={{borderRight:"1px solid #808080"}}>4</TableCell>
            <TableCell align="center" style={{borderRight:"1px solid #808080"}}>5</TableCell>
            <TableCell align="center" style={{borderRight:"1px solid #808080"}}>6</TableCell>
            <TableCell align="center" style={{borderRight:"1px solid #808080"}}>7</TableCell>
            <TableCell align="center">8</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </Paper>
  );
}
