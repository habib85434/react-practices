import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import IxPaper from '../../basic/ix-paper';
import IxPagination from '../../basic/ix-pagination';
import paginationOutput from './pagination-output';
import IxTableBody from './ix-table-body';
import IxTableTopSection from './ix-table-top-section';
import IxTableHead from './ix-table-head';

/**
 * use to determine column type and render accordingly
 * @param {array} cols columns for the table, describe below
 * @param {array} rows list of the object from array, to be rendered in the table
 * @param {boolean} toUpperCaseHeaderLabel if the table column header label will be upperCase
 * @param {number} defaultRowsPerPage number of rows displayed in each page
 * @param {object} tableFilteringContainer required only when filtering is required. Contains filtering component and the filters data
 *
 * @cols is an array of object
 * Each object in the `cols` contains the following attributes
 *      @attribute {string} name, attribute name from the row object
 *      @attribute {string} label, column header
 *      @attribute {object} tableCellStyle, directly override the table cell style
 *      @attribute {string} tableCellContentClassName, className, that should be implemented inside the table cell
 *      @attribute {string} tableCellType, type of table cell content (date, status, plain text), details can be found in `src/constants`
 *      @attribute {object} meta contains, additional information, for like date, it has date format, for link, contains href key
 *      @attribute {bool} ignoreTableSearch, search operation will ignore this certain column
 *
 * @tableFilteringContainer attributes
 * The tableFilteringContainer should have the following attributes
 *      @attribute {component} TableFilteringComponent, will placed as the filter component
 *      @attribute {object} filteringData will injects the filtered objects
 *
 */
const IxTable = ({
  cols,
  rows = [],
  toUpperCaseHeaderLabel = true,
  defaultRowsPerPage = 10,
  tableFilteringContainer
}) => {
  const rowsPerPage = defaultRowsPerPage;
  const tableAriaLabel = 'customized table';
  const [rowsToBeRendered, setRowsToBeRendered] = useState([]);
  const [currentSelectedPage, setCurrentSelectedPage] = useState(1);
  const [displayRowsRange, setDisplayRowsRange] = useState({
    startIndex: 0,
    endIndex: 0
  });

  useEffect(() => {
    const rowsLength = rowsToBeRendered.length;
    rowsLength &&
      setDisplayRowsRange(
        paginationOutput(rowsLength, currentSelectedPage, rowsPerPage)
      );
  }, [rowsToBeRendered, currentSelectedPage, rowsPerPage]);

  useEffect(() => {
    setRowsToBeRendered(rows);
  }, [rows]);

  const onChangeCurrentSelectedPage = newCurrentSelectedPage =>
    setCurrentSelectedPage(newCurrentSelectedPage);

  const onUpdateTableFilterSearch = updatedRowsList => {
    setRowsToBeRendered(updatedRowsList);
  };

  return (
    <IxPaper>
      <IxTableTopSection
        cols={cols}
        rows={rows}
        tableFilteringContainer={tableFilteringContainer}
        onUpdateTableRows={onUpdateTableFilterSearch}
      ></IxTableTopSection>
      <TableContainer>
        <Table aria-label={tableAriaLabel}>
          <IxTableHead
            toUpperCaseHeaderLabel={toUpperCaseHeaderLabel}
            cols={cols}
          />
          <IxTableBody
            displayRowsRange={displayRowsRange}
            rowsPerPage={rowsPerPage}
            rowsToBeRendered={rowsToBeRendered}
            cols={cols}
          />
        </Table>
      </TableContainer>
      <IxPagination
        rowsPerPage={rowsPerPage}
        totalRows={rowsToBeRendered.length}
        onChangeCurrentSelectedPage={onChangeCurrentSelectedPage}
        displayRowsRange={displayRowsRange}
      />
    </IxPaper>
  );
};

export default IxTable;
