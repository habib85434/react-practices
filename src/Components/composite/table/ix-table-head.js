import React from 'react';
import { TableHead, TableRow, TableCell, withStyles } from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
    padding: 5
  }
}))(TableCell);

/**
 * use to render table heads
 * @param {array} cols, columns of the table
 * @param {bool} toUpperCaseHeaderLabel, if true, make all the columns upper case
 */

const IxTableHead = ({ cols, toUpperCaseHeaderLabel }) => {
  toUpperCaseHeaderLabel &&
    (cols = cols.map(col => {
      col.label = col.label.toUpperCase();
      return col;
    }));

  return (
    <TableHead>
      <TableRow>
        {cols &&
          cols.map((col, i) => {
            return <StyledTableCell key={i}>{col.label}</StyledTableCell>;
          })}
      </TableRow>
    </TableHead>
  );
};

export default IxTableHead;
