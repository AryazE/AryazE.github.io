import { Card, CardContent, Typography, Box } from '@mui/material';

export interface TalkType {
	id: string;
	venue: string;
	subject: string;
	year: string;
}

export const Talk = ({ talk }: { talk: TalkType }) => {
	return (
		<Card
			elevation={1}
			sx={{
				margin: 2,
				borderRadius: 2,
				transition: 'transform 0.2s, box-shadow 0.2s',
				'&:hover': {
					transform: 'translateY(-4px)',
					boxShadow: 6,
				},
			}}
		>
			<CardContent sx={{ padding: 3 }}>
				<Typography
					variant="h6"
					component="div"
					sx={{
						fontWeight: 'medium',
						mb: 1,
					}}
				>
					{talk.subject}
				</Typography>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography variant="body2" color="text.secondary">
						{talk.venue}
					</Typography>
					<Typography
						variant="body2"
						color="primary"
						sx={{ fontWeight: 'medium' }}
					>
						{talk.year}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
