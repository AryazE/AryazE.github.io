import { Paper, Typography } from '@mui/material';
import { Project } from './Project';

export const Projects = ({ projects }) => {
    return (
        <Paper elevation={0} square id='projects'>
          <Typography variant="h4" component="div">
            Projects
          </Typography>
          {projects.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </Paper>
    );
}