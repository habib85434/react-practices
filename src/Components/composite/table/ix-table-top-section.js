import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import IxTableSearch from './ix-table-search';
import { yellowBaseColor } from '../../../constants/theme-colors';

const useStyles = makeStyles({
  tableFilerAndSearchContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  tableFilterContainer: {
    height: '75px'
  },
  tableSearchContainer: {
    paddingRight: '12px'
  },
  filterOptionTextColor: {
    color: yellowBaseColor,
    fontWeight: '600',
    paddingTop: '26px',
    paddingRight: '20px',
    cursor: 'pointer'
  }
});

/**
 * use to render the table top section, search and filter
 * search is always integrated with table
 * for filtering, filtering component and data must provide
 * @param {array} cols columns of the table
 * @param {array} rows, rows of the table
 * @param {obj} tableFilteringContainer contains filtering component and filters data
 * @param {func} onUpdateTableRows after filter or search, updated rows are passed to the table as parameters
 */
const IxTableTopSection = ({
  cols,
  rows = [],
  tableFilteringContainer = {},
  onUpdateTableRows
}) => {
  const classes = useStyles();
  const filterOptionTitle = 'FILTER OPTIONS';

  const [filteredRowList, setFilteredRowList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showTableFilterContainer, setShowTableFilterContainer] = useState(
    false
  );
  const [showTableFilterTextButton, setShowTableFilterTextButton] = useState(
    false
  );

  const {
    TableFilteringComponent = null,
    filteringData
  } = tableFilteringContainer;

  useEffect(() => {
    setFilteredRowList(rows);
  }, [rows]);

  useEffect(() => {
    setShowTableFilterTextButton(!!TableFilteringComponent);
  }, [TableFilteringComponent]);

  const updatedRowsOnSearch = (updatedRowsList, searchKeyword) => {
    setSearchKeyword(searchKeyword);
    onUpdateTableRows(updatedRowsList);
  };

  const updatedRowsOnFilter = updatedRowsList => {
    setFilteredRowList(updatedRowsList);
    onUpdateTableRows(updatedRowsList);
  };

  /**
   * while filtering is enabled, searching is covered in the filtering section
   */
  const isFilteringEnabled = () =>
    !!TableFilteringComponent && !showTableFilterTextButton;

  const onClickFilterOption = () => {
    setShowTableFilterContainer(true);
    setShowTableFilterTextButton(false);
  };

  return (
    <div className={classes.tableFilerAndSearchContainer}>
      <div className={classes.tableSearchContainer}>
        <IxTableSearch
          cols={cols}
          rows={filteredRowList}
          updatedRowsOnSearch={updatedRowsOnSearch}
          isFilteringEnabled={isFilteringEnabled()}
        />
      </div>
      <div className={classes.tableFilterContainer}>
        {TableFilteringComponent && showTableFilterContainer && (
          <TableFilteringComponent
            cols={cols}
            rows={rows}
            searchKeyword={searchKeyword}
            updatedRowsOnFiltering={updatedRowsOnFilter}
            filteringData={filteringData}
          />
        )}
      </div>
      {showTableFilterTextButton && (
        <div
          className={classes.filterOptionTextColor}
          onClick={onClickFilterOption}
        >
          {filterOptionTitle}
        </div>
      )}
    </div>
  );
};

export default IxTableTopSection;
