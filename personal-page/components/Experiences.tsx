import { Box, Container, Typography, Divider } from '@mui/material';
import { Experience, ExperienceType } from './Experience';
export const Experiences = ({
	experiences,
}: {
	experiences: ExperienceType[];
}) => {
	return (
		<Box
			component="section"
			id="experience"
			sx={{
				py: 8,
				backgroundColor: 'background.default',
			}}
		>
			<Container maxWidth="lg">
				<Box>
					<Typography
						variant="h4"
						component="h2"
						sx={{
							fontWeight: 700,
							mb: 4,
							position: 'relative',
							display: 'inline-block',
							'&:after': {
								content: '""',
								position: 'absolute',
								width: '60%',
								height: '4px',
								left: 0,
								bottom: '-8px',
								backgroundColor: 'primary.main',
								borderRadius: '2px',
							},
						}}
					>
						Experience
					</Typography>

					<Box sx={{ mt: 4 }}>
						{experiences.map((experience, index) => (
							<Box key={experience.id}>
								<Experience experience={experience} />
							</Box>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
