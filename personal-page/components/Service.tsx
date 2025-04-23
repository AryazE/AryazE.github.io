import { Card, CardContent, Typography, Box, Paper } from '@mui/material';

export interface ServiceType {
	id: string;
	name: string;
	description?: string;
	special?: string;
	venue?: string;
}

export const Service = ({ service }: { service: ServiceType }) => {
	return (
		<Card
			elevation={2}
			sx={{
				margin: 2,
				borderRadius: 2,
				transition: 'transform 0.3s, box-shadow 0.3s',
				'&:hover': {
					transform: 'translateY(-5px)',
					boxShadow: 6,
				},
			}}
		>
			<CardContent sx={{ padding: 3 }}>
				<Typography
					variant="h6"
					component="div"
					sx={{
						fontWeight: 600,
						mb: 1.5,
					}}
				>
					{service.name}
				</Typography>

				{service.special && (
					<Box
						component={Paper}
						elevation={0}
						sx={{
							display: 'inline-block',
							background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
							color: 'white',
							px: 1.5,
							py: 0.5,
							borderRadius: 1,
							mb: 2,
							fontWeight: 'bold',
						}}
					>
						{service.special}
					</Box>
				)}

				{service.description && (
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							mb: 2,
							lineHeight: 1.6,
						}}
					>
						{service.description}
					</Typography>
				)}

				{service.venue && (
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							fontStyle: 'italic',
							mt: 'auto',
						}}
					>
						{service.venue}
					</Typography>
				)}
			</CardContent>
		</Card>
	);
};
