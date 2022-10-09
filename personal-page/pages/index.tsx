import fs from 'fs';
import { Image } from 'mui-image';
import { Container, AppBar, Tabs, Tab, Paper, Card, CardContent, Typography, Link, Fab, Hidden, Box, Grid, Toolbar, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import Head from 'next/head';
import { useState } from 'react';
import { Projects } from '../components/Projects';
import { Experiences } from '../components/Experiences';

function Home({ projects, experiences }) {
  const [value, setValue] = useState('about');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth='false'>
      <Head>
        <title>Aryaz Eghbali</title>
        <meta name="description" content="Aryaz Eghbali's personal page" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fab href='#' sx={{ position: 'fixed', bottom: '32px', right: '32px' }} >
        <KeyboardArrowUpIcon />
      </Fab>

      <Container maxWidth='false' >
        <AppBar position="fixed" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar>
            <Typography href='#' sx={{ mr: 2}} >
              Aryaz Eghbali
            </Typography>
            <Typography href="#projects" sx={{ mr: 2}} >Projects</Typography>
            <Typography href="#experience" sx={{ mr: 2}} >Experience</Typography>
            <Typography href='https://scholar.google.com/citations?user=3tMiDdcAAAAJ&hl=en' sx={{ mr: 2}} >
              <SchoolIcon />
            </Typography>
            <Typography href='https://github.com/AryazE' sx={{ mr: 2}} >
              <GitHubIcon />
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={0} square id='top'>
          <Box sx={{ height: 1 }} />
        </Paper>
        <Paper elevation={0} square id='about' >
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} md={3}>
              <Image src='aryaz.jpg' alt='Aryaz Eghbali' />              
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography>My name is Aryaz Eghbali.</Typography>
              <Typography>I am a PhD student in the <Link href="https://software-lab.org/">Software Lab</Link> at the University of Stuttgart, Germany.</Typography>
              <Typography>My main research interest is automating software analysis and development.</Typography>
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
