import { Paper, Typography, Grid, Box, Container } from '@mui/material';
import { Project, ProjectType } from './Project';

export const Projects = ({ projects }: { projects: ProjectType[] }) => {
	return (
		<Box
			component="section"
			id="projects"
			sx={{
				py: 8,
				background: '#f5f7fa', // Solid color instead of gradient
				borderRadius: 0,
			}}
		>
			<Container maxWidth="lg">
				<Typography
					variant="h4"
					component="h2"
					sx={{
						mb: 4,
						fontWeight: 700,
						textAlign: 'center',
						position: 'relative',
						'&:after': {
							content: '""',
							position: 'absolute',
							bottom: -10,
							left: '50%',
							transform: 'translateX(-50%)',
							width: 80,
							height: 3,
							backgroundColor: 'primary.main',
						},
					}}
				>
					Projects
				</Typography>

				<Grid container spacing={4}>
					{projects.map((project) => (
						<Grid item xs={12} sm={6} md={4} key={project.id}>
							<Project project={project} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
