import React from 'react';
import './App.css';
import AboutSection from "../aboutSection";
import ContactsSection from "../contactsSection";
import PositionsList from "../positionsList";
import FeatsList from "../featsList";
import {Grid, Divider,Container, Paper} from "@material-ui/core";
import LanguageSelector from "../languageSelector";


export default function App (){




     return (
        <Container>
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="flex-start"
                  spacing={3}>
                <Grid item xs={12}>
                    <LanguageSelector/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className='paper'>Name</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className='paper'>Position</Paper>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <AboutSection />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <ContactsSection />
                </Grid>
            </Grid>
            <Divider className='divider' />
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="flex-start"
                  spacing={3}>
                <Grid item xs={12}>
                    <PositionsList />
                </Grid>

                <Grid item xs={6}>
                    <FeatsList />
                </Grid>
                <Grid item xs={6}>
                    <FeatsList />
                </Grid>
            </Grid>

            <Divider className='divider' />

        </Container>
)
}

