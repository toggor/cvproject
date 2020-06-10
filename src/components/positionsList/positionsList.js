import React from "react";
import PositionItem from "../positionItem";
import {Box} from "@material-ui/core";

export default function PositionsList(){
    return(
        <Box>
            <PositionItem />
            <PositionItem />
        </Box>
    );
}