import React from 'react';

import {
  APPROVED,
  DESIGN,
  PROTOTYPE,
  RELEASED
} from '../../../constants/ust-project-status-type';
import IxTableCell from '../../basic/ix-table-cell';
import IxPlainTableCellContent from '../../basic/ix-plain-table-cell-content';
import {
  whiteBaseColor,
  yellowBaseColor,
  blueColor,
  greenColor,
  violetColor
} from '../../../constants/theme-colors';

/**
 * use to render the status with dynamic foreground color of the project in the table
 * project status type can be found in the `src/constants`
 * according to the project status, the fore ground color of the table cell will be changed
 * @param {string} tableCellText the project status name
 * @param {object} tableCellStyle the project cell style will override the default table cell styles
 * @param {object} tableCellContentClassName the project cell content style will be placed inside the table cell
 */
const IxStatusTableCell = ({
  tableCellStyle,
  tableCellText,
  tableCellContentClassName
}) => {
  let backgroundColor;
  let color;
  switch (tableCellText) {
    case APPROVED:
      backgroundColor = greenColor;
      color = whiteBaseColor;
      break;
    case DESIGN:
      backgroundColor = blueColor;
      color = whiteBaseColor;
      break;
    case PROTOTYPE:
      backgroundColor = yellowBaseColor;
      color = whiteBaseColor;
      break;
    case RELEASED:
      backgroundColor = violetColor;
      color = whiteBaseColor;
      break;
    default:
      backgroundColor = whiteBaseColor;
      break;
  }

  const updatedTableCellContentStyle = {
    backgroundColor,
    color
  };

  return (
    <IxTableCell tableCellStyle={tableCellStyle}>
      <IxPlainTableCellContent
        tableCellContentStyle={updatedTableCellContentStyle}
        tableCellContentClassName={tableCellContentClassName}
        tableCellText={tableCellText}
      />
    </IxTableCell>
  );
};

export default IxStatusTableCell;
