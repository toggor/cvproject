import React, {Component} from "react";
import {Box, Paper} from "@material-ui/core";

export default class ContactsSection extends Component{
    constructor() {
        super();
    }

    render(){
        return(
            <Box>
                <Paper className='paper'><b>Phone:</b>some@mail.ru</Paper>
                <Paper className='paper'><b>E-mail:</b>some@mail.ru</Paper>
                <Paper className='paper'>Linkedin @linkedin</Paper>
                <Paper className='paper'>GitHub @linkedin</Paper>
            </Box>
        )
    }
}
