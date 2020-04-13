import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import mainLogo from '../../../assets/image/ust-mamiya.png';

import SignIn from './signIn';
import { validateUser } from './auth-service';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.ustmamiya.com/">
                NEXT
      </Link>{' '}
            {new Date().getFullYear()}
            {', All rights reserved'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(5),
        //backgroundColor: theme.palette.secondary.main,
        width: 'auto',
        height: 'auto'
    }
}));

const LoginContainer = (props) => {
    const classes = useStyles();
    const [isValidUser, setValidUser] = useState(true);

    const login = async (values) => {
        const user = {
            "user_name": values.email,
            "password": values.password
        }
        const userData = await validateUser(user);
        if (userData && userData.token) {
            localStorage.setItem('token', userData.token);
            props.history.push("/home")
        } else {
            setValidUser(false);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                {/* <Avatar variant="square"
                    className={classes.avatar}
                    src={mainLogo}>
                </Avatar> */}
                <Typography component="h1" variant="h5">
                   NEXT
                </Typography>
                {/* signin form */}
                {!isValidUser && <FormHelperText id="component-helper-text" error>Invalid user</FormHelperText>}
                <SignIn onSubmit={login} />
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default LoginContainer