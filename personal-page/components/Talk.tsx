import { Card, CardContent, Typography } from '@mui/material';

export interface TalkType {
    id: string;
    venue: string;
    subject: string;
    year: string;
}

export const Talk = ({ talk }: { talk: TalkType; }) => {
    return (
        <Card sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="body2" component="div">
                {talk.subject}
              </Typography>
              <Typography variant="body2" component="div">
                {talk.venue}
              </Typography>
            </CardContent>
          </Card>
    );
}