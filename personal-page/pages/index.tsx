import fs from 'fs';
import {
	Container,
	AppBar,
	Paper,
	Typography,
	Link,
	Fab,
	Box,
	Grid,
	Toolbar,
	IconButton,
	Button,
	useTheme,
	useMediaQuery,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Divider,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';
import { useState } from 'react';
import { Projects } from '../components/Projects';
import { ProjectType } from '../components/Project';
import { Experiences } from '../components/Experiences';
import { ExperienceType } from '../components/Experience';
import { ServiceType } from '../components/Service';
import { Services } from '../components/Services';
import { TalkType } from '../components/Talk';
import { Talks } from '../components/Talks';
import Image from 'next/image';

function Home({
	projects,
	experiences,
	services,
	talks,
}: {
	projects: [ProjectType];
	experiences: [ExperienceType];
	services: [ServiceType];
	talks: [TalkType];
}) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const navItems = [
		{ name: 'Projects', href: '#projects' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Talks', href: '#talks' },
		{ name: 'Services', href: '#services' },
	];

	const NavDrawer = (
		<Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
			<Box
				sx={{ width: 250, pt: 5 }}
				role="presentation"
				onClick={toggleDrawer}
			>
				<List>
					{navItems.map((item) => (
						<ListItem button key={item.name} component="a" href={item.href}>
							<ListItemText primary={item.name} />
						</ListItem>
					))}
					<Divider sx={{ my: 2 }} />
					<ListItem
						button
						component="a"
						href="https://scholar.google.com/citations?user=3tMiDdcAAAAJ&hl=en"
					>
						<SchoolIcon sx={{ mr: 1 }} /> Scholar
					</ListItem>
					<ListItem button component="a" href="https://github.com/AryazE">
						<GitHubIcon sx={{ mr: 1 }} /> GitHub
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);

	return (
		<Box sx={{ bgcolor: '#f5f5f7' }}>
			<Head>
				<title>Aryaz Eghbali</title>
				<meta name="description" content="Aryaz Eghbali's personal page" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Fab
				color="primary"
				size="medium"
				href="#"
				sx={{
					position: 'fixed',
					bottom: '32px',
					right: '32px',
					boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
				}}
			>
				<KeyboardArrowUpIcon />
			</Fab>

			<AppBar
				position="fixed"
				elevation={0}
				sx={{
					background: 'rgba(255, 255, 255, 0.8)',
					backdropFilter: 'blur(10px)',
					borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
					color: 'text.primary',
				}}
			>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Typography
						variant="h6"
						component="a"
						href="#"
						sx={{
							fontWeight: 600,
							color: 'inherit',
							textDecoration: 'none',
							letterSpacing: '-0.5px',
						}}
					>
						Aryaz Eghbali
					</Typography>

					{isMobile ? (
						<IconButton edge="end" color="inherit" onClick={toggleDrawer}>
							<MenuIcon />
						</IconButton>
					) : (
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							{navItems.map((item) => (
								<Button
									key={item.name}
									href={item.href}
									sx={{
										mx: 1,
										color: 'text.primary',
										'&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
									}}
								>
									{item.name}
								</Button>
							))}
							<IconButton
								href="https://scholar.google.com/citations?user=3tMiDdcAAAAJ&hl=en"
								sx={{ ml: 1, color: 'text.secondary' }}
							>
								<SchoolIcon />
							</IconButton>
							<IconButton
								href="https://github.com/AryazE"
								sx={{ ml: 1, color: 'text.secondary' }}
							>
								<GitHubIcon />
							</IconButton>
						</Box>
					)}
				</Toolbar>
			</AppBar>
			{NavDrawer}

			<Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
				<Paper
					elevation={0}
					sx={{
						borderRadius: 3,
						overflow: 'hidden',
						mb: 6,
						boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
					}}
					id="about"
				>
					<Grid container spacing={0}>
						<Grid
							item
							xs={12}
							md={4}
							sx={{
								bgcolor: theme.palette.primary.main,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								p: 4,
							}}
						>
							<Box
								sx={{
									borderRadius: '50%',
									overflow: 'hidden',
									width: 200,
									height: 200,
									border: '4px solid white',
								}}
							>
								<Image
									src="aryaz.jpg"
									alt="Aryaz Eghbali"
									width={200}
									height={200}
									style={{ objectFit: 'cover' }}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={8}>
							<Box sx={{ p: 4 }}>
								<Typography variant="h4" gutterBottom fontWeight={600}>
									Hello, I'm Aryaz Eghbali
								</Typography>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									gutterBottom
									sx={{ mb: 3 }}
								>
									PhD Student at University of Stuttgart, Germany
								</Typography>
								<Typography paragraph sx={{ mb: 2 }}>
									I am a researcher in the{' '}
									<Link href="https://software-lab.org/" underline="hover">
										Software Lab
									</Link>{' '}
									focused on automating software analysis and development.
								</Typography>
								<Typography paragraph sx={{ mb: 2 }}>
									Recently, I have been working on a dynamic linter for Python
									called
									<Link href="#projects" underline="hover">
										{' '}
										DyLin
									</Link>
									, mitigating hallucinations in LLM using iterative grounding,
									automatically generating tests, a novel metric to evaluate
									similarity in source code called
									<Link href="#projects" underline="hover">
										{' '}
										CrystalBLEU
									</Link>
									, and the first general-purpose dynamic analysis framework for
									Python called{' '}
									<Link href="#projects" underline="hover">
										DynaPyt
									</Link>
									.
								</Typography>
								<Typography paragraph>
									My background includes work in distributed algorithms and
									distributed systems.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Paper>

				<Projects projects={projects} />
				<Experiences experiences={experiences} />
				<Talks talks={talks} />
				<Services services={services} />
			</Container>
		</Box>
	);
}

export async function getStaticProps() {
	const projects = JSON.parse(
		fs.readFileSync('./content/projects.json', { encoding: 'utf-8' })
	);
	const experiences = JSON.parse(
		fs.readFileSync('./content/experiences.json', { encoding: 'utf-8' })
	);
	const services = JSON.parse(
		fs.readFileSync('./content/services.json', { encoding: 'utf-8' })
	);
	const talks = JSON.parse(
		fs.readFileSync('./content/talks.json', { encoding: 'utf-8' })
	);
	return {
		props: {
			projects,
			experiences,
			services,
			talks,
		},
	};
}

export default Home;
