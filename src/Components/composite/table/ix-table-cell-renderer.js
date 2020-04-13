import React from 'react';

import {
  DEFAULT_CELL_TYPE,
  STATUS_CELL_TYPE,
  DATE_CELL_TYPE,
  LINK_CELL_TYPE
} from '../../../constants/ix-table-cell-type';
import IxStatusTableCell from './ix-status-table-cell';
import IxPlainTableCellContent from '../../basic/ix-plain-table-cell-content';
import IxDateTableCellContent from '../../basic/ix-date-table-cell-content';
import IxTableCell from '../../basic/ix-table-cell';
import IxLinkTableCellContent from '../../basic/ix-link-table-cell-content';

/**
 * use to determine column type and render accordingly
 * @param {string} tableCellText the actual value to be rendered. Can be status, date or plain text with design
 * @param {object} tableCellStyle use to override the current design of the table cell
 * @param {object} tableCellContentClassName this class style will be implemented inside the table cell
 * @param {string} tableCellType types of table cell can be found in the src/enum section. It can be plain text, date, status
 * @param {string} meta more information about the cell it it is required. For example, date requires the format along with its value and design
 */
const IxTableCellRenderer = ({
  tableCellText,
  tableCellStyle = {},
  tableCellContentClassName = '',
  tableCellType = DEFAULT_CELL_TYPE,
  dateFormat,
  hypertextReference
}) => {
  !tableCellText && (tableCellText = '-');
  switch (tableCellType) {
    case STATUS_CELL_TYPE:
      return (
        <IxStatusTableCell
          tableCellStyle={tableCellStyle}
          tableCellContentClassName={tableCellContentClassName}
          tableCellText={tableCellText}
        />
      );
    case DATE_CELL_TYPE:
      return (
        <IxTableCell tableCellStyle={tableCellStyle}>
          <IxDateTableCellContent
            tableCellText={tableCellText}
            dateFormat={dateFormat}
          />
        </IxTableCell>
      );
    case LINK_CELL_TYPE:
      return (
        <IxTableCell tableCellStyle={tableCellStyle}>
          <IxLinkTableCellContent
            tableCellText={tableCellText}
            tableCellContentClassName={tableCellContentClassName}
            hypertextReference={hypertextReference}
          />
        </IxTableCell>
      );
    default:
      return (
        <IxTableCell tableCellStyle={tableCellStyle}>
          <IxPlainTableCellContent tableCellText={tableCellText} />
        </IxTableCell>
      );
  }
};

export default IxTableCellRenderer;
