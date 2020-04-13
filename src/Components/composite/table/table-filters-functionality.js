import * as moment from 'moment';

import { TEXT_CELL, DATE_CELL } from './table-filter-type';

/**
 *
 * @param {date} dateToBeObserved, date is check if it is between the start and end date
 * @param {date} startDate initial range of the date
 * @param {date} endDate end range of the date
 */
const isDateBetween = (dateToBeObserved, startDate, endDate) =>
  startDate &&
  endDate &&
  moment(dateToBeObserved).isBetween(startDate, endDate);

/**
 * return columns, that are eligible to search
 * uses to return the column list, that is eligible to search
 * if a column has `ignoreTableSearch` is true, only then it is eligible to search
 * @param {array} columns thats are about to be filtered
 */
export const getSearchableColumnList = columns =>
  columns
    .map(column => (!column.ignoreTableSearch ? column.name : null))
    .filter(validName => validName);

/**
 * return searched rows list
 * use to filter the rows, that matched / includes the search key
 * @param {array} rows about to be filtered
 * @param {array} columnsToBeSearched in rows, theses columns are considered to be searched
 * @param {string} searchKey search keyword, use to search on rows and columns
 */
export const searchListByKeyword = (rows, columnsToBeSearched, searchKey) =>
  searchKey
    ? rows.filter(row => {
        let isMatched = false;
        for (
          let index = 0;
          index < columnsToBeSearched.length && !isMatched;
          index++
        ) {
          isMatched =
            row[columnsToBeSearched[index]] &&
            row[columnsToBeSearched[index]].includes(searchKey);
        }
        return isMatched && row;
      })
    : rows;

/**
 * return the filtered rows list
 * use to filter rows
 * filtering is only applied on a certain column using the keyword
 * @param {array} rows about to be filtered
 * @param {string} columnName only this column is considered while filtering
 * @param {string} keyword filtering is operated on this keyword
 */

export const filterListByKeyword = (rows, columnName, keyword) =>
  keyword
    ? rows.filter(
        row => row && row[columnName] && row[columnName].includes(keyword)
      )
    : rows;

/**
 * return the filtered rows list
 * use to filter rows
 * filtering is only applied on a certain column using the keyword
 * @param {array} rows about to be filtered
 * @param {string} columnName only this column is considered while filtering
 * @param {object} dateRange, filtering is operated on this date range
 */
export const filterListByDateRange = (
  rows,
  columnName,
  { startDate, endDate }
) =>
  startDate && endDate
    ? rows.filter(
        row =>
          row &&
          row[columnName] &&
          moment(row[columnName]).isBetween(startDate, endDate)
      )
    : rows;

/**
 * return searched and filtered rows list
 * first find out the search eligible column list
 * retrieved the searched rows
 * on searched rows, find out the filtered rows
 * @param {array} rows to searched and filtered
 * @param {array} columns
 * @param {string} searchKeyword
 * @param {object} filteredObjects filtered key objects
 */
export const filterListByObject = (
  rows,
  columns,
  searchKeyword,
  filteredObjects
) =>
  searchListByKeyword(
    rows,
    getSearchableColumnList(columns),
    searchKeyword
  ).filter(row => {
    let isMatched = true;
    Object.keys(filteredObjects).forEach(key => {
      const { type, value } = filteredObjects[key];

      if (type === DATE_CELL) {
        const { startDate, endDate } = value;
        value &&
          startDate &&
          endDate &&
          !isDateBetween(row[key], startDate, endDate) &&
          (isMatched = false);
      }
      value &&
        type === TEXT_CELL &&
        !row[key].includes(value) &&
        (isMatched = false);
    });

    return isMatched && row;
  });
