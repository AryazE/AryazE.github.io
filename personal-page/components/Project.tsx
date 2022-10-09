import { Card, CardContent, Typography, Link } from '@mui/material';

interface ProjectType {
  name: string;
  description: string;
  githubURL: string;
  special?: string;
  venue?: string;
}

export const Project = ({ project }: { ProjectType }) => {
    return (
        <Card sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <Link href={project.githubURL} underline='none'>
                  {project.name}
                </Link>
              </Typography>
              <Typography variant="body2">
                <b>{project.special}</b>
              </Typography>
              <Typography variant="body2">
                {project.description}
              </Typography>
              <Typography variant="body2" component="div">
                {project.venue}
              </Typography>
            </CardContent>
          </Card>
    );
}