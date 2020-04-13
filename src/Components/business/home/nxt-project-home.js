import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

import DbkDialog from '../../composite/ix-nxt-modal';
import DbkTree from '../../composite/ix-nxt-tree';
import ErrorSnackBar from '../../composite/ix-error-notification';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'unset'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  toolbarHome: {
    backgroundColor: grey[200],
    height: '100px',
    color: 'black'
  }
}));

export default function ProjectHome({
  project,
  userListData,
  handleUserListFetch,
  destroyProjectWizardForm
}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleProjectDialogClickOpen = () => {
    setOpen(true);
  };

  const handleProjectDialogClose = async () => {
    setOpen(false);
  };

  const handleProjectDialogExited = () => {
    destroyProjectWizardForm();
  };

  useEffect(() => {
    handleUserListFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* header */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
           NEXT
          </Typography>
        </Toolbar>
        <Toolbar className={classes.toolbarHome}>
          <Grid item md={10} style={{ minWidth: '65%' }}>
            <Typography component="div">
              <Box fontWeight={500} m={1} textAlign="left">
                Companies
              </Box>
              <Box fontWeight={300} m={1} textAlign="left">
                List of ongoing and finished Companies
              </Box>
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Button onClick={handleProjectDialogClickOpen}>Add Company</Button>
            <DbkDialog
              handleClose={handleProjectDialogClose}
              onExited={handleProjectDialogExited}
              open={open}
              modaltitle={'Add Company'}
            >
            </DbkDialog>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* side bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />

        <DbkTree></DbkTree>
      </Drawer>
      {/* main content */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
       
      </main>
    </div>
  );
}
