import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import { Talk, TalkType } from './Talk';

export const Talks = ({ talks }: { talks: TalkType[] }) => {
	return (
		<Box
			id="talks"
			sx={{
				py: 6,
				background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
			}}
		>
			<Container maxWidth="lg">
				<Typography
					variant="h3"
					component="h2"
					sx={{
						mb: 4,
						fontWeight: 'bold',
						position: 'relative',
						'&::after': {
							content: '""',
							position: 'absolute',
							bottom: -10,
							left: 0,
							width: 60,
							height: 4,
							backgroundColor: 'primary.main',
							borderRadius: 2,
						},
					}}
				>
					Talks
				</Typography>

				<Grid container spacing={3}>
					{talks.map((talk) => (
						<Grid item xs={12} key={talk.id}>
							<Talk talk={talk} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
