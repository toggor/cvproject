import React, {Component} from "react";
import {Box, Grid, Paper} from "@material-ui/core";

export default class AboutSection extends Component{
    constructor() {
        super();
    }

    render(){
        return(
            <Paper className='paper'>About me section containing some general information</Paper>
            )
    }
}
