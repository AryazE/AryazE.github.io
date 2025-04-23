import { Box, Container, Typography, Grid } from '@mui/material';
import { Service, ServiceType } from './Service';

export const Services = ({ services }: { services: ServiceType[] }) => {
	return (
		<Box
			id="services"
			sx={{
				py: 8,
				backgroundColor: 'background.default',
				borderRadius: 0,
			}}
		>
			<Container maxWidth="lg">
				<Typography
					variant="h4"
					component="h2"
					align="center"
					sx={{
						mb: 6,
						fontWeight: 700,
						position: 'relative',
						'&:after': {
							content: '""',
							display: 'block',
							width: '50px',
							height: '3px',
							backgroundColor: 'primary.main',
							margin: '16px auto',
						},
					}}
				>
					Services
				</Typography>

				<Grid container spacing={4}>
					{services.map((service) => (
						<Grid item xs={12} md={4} key={service.id}>
							<Service service={service} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
