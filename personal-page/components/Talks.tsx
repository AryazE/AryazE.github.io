import { Paper, Typography } from '@mui/material';
import { Talk, TalkType } from './Talk';

export const Talks = ({ talks }: { talks: [TalkType]; }) => {
    return (
        <Paper elevation={0} square id='talks'>
          <Typography variant="h4" component="div">
            Talks
          </Typography>
          {talks.map(talk => {
            return <Talk key={talk.id} talk={talk} />;
          })}
        </Paper>
    );
}