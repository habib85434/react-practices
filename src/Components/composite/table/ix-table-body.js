import React from 'react';
import { TableBody, withStyles, TableRow } from '@material-ui/core';
import IxTableCellRenderer from './ix-table-cell-renderer';

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      //backgroundColor: theme.palette.background.default,
    }
  }
}))(TableRow);

const IxTableBody = ({
  displayRowsRange,
  rowsPerPage,
  rowsToBeRendered,
  cols
}) => {
  const getRowsOfPaginatedRange = displayRowsRange => {
    const { startIndex, endIndex } = displayRowsRange;
    const newRows = [];
    for (
      let index = startIndex;
      index <= endIndex && rowsToBeRendered[index];
      index++
    ) {
      newRows.push(rowsToBeRendered[index]);
    }
    return newRows;
  };
  return (
    <TableBody>
      {(displayRowsRange && rowsPerPage > 0 && rowsToBeRendered.length
        ? getRowsOfPaginatedRange(displayRowsRange)
        : rowsToBeRendered
      ).map((row, i) => {
        return (
          <StyledTableRow key={i}>
            {cols &&
              cols.map((col, i) => {
                const {
                  name,
                  tableCellStyle,
                  tableCellContentClassName,
                  tableCellType,
                  meta = {}
                } = col;
                return (
                  <IxTableCellRenderer
                    key={i}
                    tableCellText={row[name]}
                    tableCellStyle={tableCellStyle}
                    tableCellContentClassName={tableCellContentClassName}
                    tableCellType={tableCellType}
                    dateFormat={meta['dateFormat']}
                    hypertextReference={row[meta['href']]}
                  />
                );
              })}
          </StyledTableRow>
        );
      })}
    </TableBody>
  );
};

export default IxTableBody;
