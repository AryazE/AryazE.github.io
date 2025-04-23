import {
	Card,
	CardContent,
	Typography,
	Link,
	Box,
	Chip,
	Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface ProjectType {
	id: string;
	name: string;
	authors: string;
	description: string;
	githubURL: string;
	special?: string;
	venue?: string;
}

export const Project = ({ project }: { project: ProjectType }) => {
	return (
		<Card
			elevation={2}
			sx={{
				margin: 2,
				transition: 'transform 0.3s, box-shadow 0.3s',
				'&:hover': {
					transform: 'translateY(-5px)',
					boxShadow: 6,
				},
				borderRadius: 2,
				overflow: 'hidden',
			}}
		>
			<CardContent sx={{ p: 3 }}>
				<Stack spacing={1.5}>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="h5" component="div" fontWeight="bold">
							{project.name}
						</Typography>
						<Link
							href={project.githubURL}
							target="_blank"
							sx={{
								color: 'text.secondary',
								'&:hover': { color: 'primary.main' },
							}}
						>
							<GitHubIcon />
						</Link>
					</Box>

					{project.special && (
						<Chip
							label={project.special}
							color="primary"
							size="small"
							sx={{ alignSelf: 'flex-start' }}
						/>
					)}

					<Typography variant="body2" color="text.secondary" fontStyle="italic">
						{project.authors}
					</Typography>

					<Typography variant="body1" sx={{ my: 1 }}>
						{project.description}
					</Typography>

					{project.venue && (
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								p: 1,
								bgcolor: 'background.paper',
								borderRadius: 1,
								border: '1px solid',
								borderColor: 'divider',
							}}
						>
							{project.venue}
						</Typography>
					)}
				</Stack>
			</CardContent>
		</Card>
	);
};
