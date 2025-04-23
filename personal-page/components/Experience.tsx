import { Box, Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ExperienceType {
	id: string;
	title: string;
	place: string;
	date: string;
	description?: string;
	supervisor?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
	margin: theme.spacing(2),
	borderRadius: theme.spacing(2),
	boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
	transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
	'&:hover': {
		transform: 'translateY(-4px)',
		boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
	},
}));

export const Experience = ({ experience }: { experience: ExperienceType }) => {
	return (
		<StyledCard>
			<CardContent sx={{ p: 3 }}>
				<Stack spacing={2}>
					<Typography variant="h5" fontWeight="bold">
						{experience.title}
					</Typography>

					<Stack direction="row" spacing={1} alignItems="center">
						<Chip
							label={experience.date}
							size="small"
							sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}
						/>
						<Typography variant="body2" color="text.secondary">
							{experience.place}
						</Typography>
					</Stack>

					{experience.supervisor && (
						<Typography variant="body2" color="text.secondary">
							<Box component="span" fontWeight="medium">
								Supervisor:
							</Box>{' '}
							{experience.supervisor}
						</Typography>
					)}

					{experience.description && (
						<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
							{experience.description}
						</Typography>
					)}
				</Stack>
			</CardContent>
		</StyledCard>
	);
};
