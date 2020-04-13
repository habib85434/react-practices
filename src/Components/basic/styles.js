import { makeStyles } from '@material-ui/core/styles';

export const PROJECT_STATUS_TABLE_CELL_CONTENT =
  'projectStatusTableCellContent';
export const useStyles = makeStyles(theme => ({
  [PROJECT_STATUS_TABLE_CELL_CONTENT]: {
    padding: '1px 2px 1px 2px',
    display: 'inline',
    fontSize: '10px'
  }
}));
