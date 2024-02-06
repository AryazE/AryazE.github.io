import { Paper, Typography } from '@mui/material';
import { Service, ServiceType } from './Service';

export const Services = ({ services }: { services: [ServiceType];}) => {
    return (
        <Paper elevation={0} square id='services'>
          <Typography variant="h4" component="div">
            Service
          </Typography>
          {services.map(service => {
            return <Service key={service.id} service={service} />;
          })}
        </Paper>
    );
}