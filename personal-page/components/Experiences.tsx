import { Paper, Typography } from '@mui/material';
import { Experience, ExperienceType } from './Experience';

export const Experiences = ({ experiences }: {experiences: [ExperienceType]; }) => {
    return (
        <Paper elevation={0} square id='experience'>
          <Typography variant="h4" component="div">
            Experience
          </Typography>
          {experiences.map(experience => {
            return <Experience key={experience.id} experience={experience} />;
          })}
        </Paper>
    );
}