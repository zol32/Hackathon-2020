import React, { Component } from 'react';
import { Fragment } from 'react';
import SignUp from './components/SignUp';

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class register extends Component {
    render() {
        return (
            <SignUp />
        );
    }
}

export default register
