import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  getSearchableColumnList,
  searchListByKeyword
} from './table-filters-functionality';
import IxTextField from '../../basic/ix-text-field';

const useStyles = makeStyles({
  tableSearchStyle: {
    width: '120px'
  }
});

/**
 * will send the updated table rows after being searched
 * @param {array} rows, get all the rows, to be searched
 * @param {array} cols, list of columns of the table, filter columns by checking if the column search is disabled by `ignoreTableSearch`
 * @param {func} updatedRowsOnSearch, on change search keyword, the updated filtered rows will be passed through updatedRowsOnSearch method
 */

const IxTableSearch = ({
  rows,
  cols,
  updatedRowsOnSearch,
  isFilteringEnabled = false
}) => {
  const [columnsToBeSearched, setColumnsToBeSearched] = useState([]);
  const classes = useStyles();
  const searchTitle = 'Search';

  const onChangeSearchKeyword = event => {
    const searchKey = event.target.value;
    return isFilteringEnabled
      ? updatedRowsOnSearch(rows, searchKey)
      : updatedRowsOnSearch(
          searchListByKeyword(rows, columnsToBeSearched, searchKey),
          searchKey
        );
  };

  useEffect(() => {
    setColumnsToBeSearched(getSearchableColumnList(cols));
  }, [cols]);

  return (
    <div className={classes.tableSearchStyle}>
      <IxTextField
        onChangeTextField={onChangeSearchKeyword}
        title={searchTitle}
      />
    </div>
  );
};

export default IxTableSearch;
