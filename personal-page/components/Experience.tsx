import { Card, CardContent, Typography, Link } from '@mui/material';

interface ExperienceType {
  title: string;
  place: string;
  date: string;
  description?: string;
  supervisor?: string;
}

export const Experience = ({ experience: ExperienceType }) => {
    return (
        <Card sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                  {experience.title}
              </Typography>
              <Typography variant="body2">
                {experience.date}, {experience.place}
              </Typography>
              <Typography variant="body2" component="div">
                {(experience.supervisor && 'Supervisor: ' + experience.supervisor) || ''}
              </Typography>
              <Typography variant="body2" component="div">
                {experience.description || ''}
              </Typography>
            </CardContent>
          </Card>
    );
}