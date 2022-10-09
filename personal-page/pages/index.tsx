import fs from 'fs';
import { Container, AppBar, Tabs, Tab, Paper, Card, CardContent, Typography, Link, Fab, Hidden, Box, Grid, Toolbar, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import Head from 'next/head';
import { useState } from 'react';
import { Projects } from '../components/Projects';
import { ProjectType } from '../components/Project';
import { Experiences } from '../components/Experiences';
import { ExperienceType } from '../components/Experience';
import Image from 'next/image';

function Home({ projects, experiences } : { projects: [ProjectType]; experiences: [ExperienceType]; }) {
  return (
    <Container maxWidth={false}>
      <Head>
        <title>Aryaz Eghbali</title>
        <meta name="description" content="Aryaz Eghbali's personal page" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fab href='#' sx={{ position: 'fixed', bottom: '32px', right: '32px' }} >
        <KeyboardArrowUpIcon />
      </Fab>

      <Container maxWidth={false} >
        <AppBar position="fixed" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar>
            <Typography component='a' href='#' sx={{ mr: 2, color: 'inherit', textDecoration: 'none' }} >
              Aryaz Eghbali
            </Typography>
            <Typography component='a' href="#projects" sx={{ mr: 2, color: 'inherit', textDecoration: 'none' }} >Projects</Typography>
            <Typography component='a' href="#experience" sx={{ mr: 2, color: 'inherit', textDecoration: 'none', flexGrow: 1 }} >Experience</Typography>
            <Typography component='a' href='https://scholar.google.com/citations?user=3tMiDdcAAAAJ&hl=en' sx={{ mr: 2, color: 'inherit', textDecoration: 'none' }} >
              <SchoolIcon />
            </Typography>
            <Typography component='a' href='https://github.com/AryazE' sx={{ mr: 2, color: 'inherit', textDecoration: 'none' }} >
              <GitHubIcon />
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={0} square id='top'>
          <Box sx={{ height: 2 }} />
        </Paper>
        <Paper elevation={0} square id='about' >
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} md={3}>
              <Image src='aryaz.jpg' alt='Aryaz Eghbali' width='236' height='297' />              
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography>My name is Aryaz Eghbali.</Typography>
              <Typography>I am a PhD student in the <Link href="https://software-lab.org/">Software Lab</Link> at the University of Stuttgart, Germany.</Typography>
              <Typography>My area of interest is automating software analysis and development. Recently, I have been working on automatically generating tests, a novel metric to evaluate similarity in source code called <Link href='#projects' >CrystalBLEU</Link>, and the first general-purpose dynamic analysis framework for Python called <Link href='#projects'>DynaPyt</Link>.</Typography>
              <Typography>I previously worked on distributed algorithms and distributed systems.</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Projects projects={projects} />
        <Experiences experiences={experiences} />
      </Container>
    </Container>
  );
}

export async function getStaticProps() {
  const projects = JSON.parse(fs.readFileSync('./content/projects.json', { encoding: 'utf-8' }));
  const experiences = JSON.parse(fs.readFileSync('./content/experiences.json', { encoding: 'utf-8' }));
  return {
    props: {
      projects,
      experiences
    }
  };
}

export default Home
