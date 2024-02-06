import { Card, CardContent, Typography, Link } from '@mui/material';

export interface ServiceType {
  id: string;
  name: string;
  description?: string;
  special?: string;
  venue?: string;
}

export const Service = ({ service }: { service: ServiceType; } ) => {
    return (
        <Card sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="body2" component="div">
                {service.name}
              </Typography>
              <Typography variant="body2">
                <b>{service.special}</b>
              </Typography>
              <Typography variant="body2">
                {service.description}
              </Typography>
              <Typography variant="body2" component="div">
                {service.venue}
              </Typography>
            </CardContent>
          </Card>
    );
}