import { Box, Typography } from '@mui/material';
import Stats from './Routes/Home/Stats/Stats';

function AppContent({ children }) {
	return (
		<Box p="2rem" display="flex" flexDirection="column" height="100%">
			<Box p="2rem 0 4rem" display="flex" justifyContent="space-between">
				<Box display="flex" gap="1rem" alignItems="center">
					<Box mr="-20px" display="flex" flexDirection="column">
						<Typography variant="h2" color="primary">
							S.M.A.R
						</Typography>
						<Box
							display="grid"
							gridTemplateColumns="repeat(4, 60px)"
							ml="2px"
							color="test.secondary"
						>
							<span>Spam</span>
							<span>Me</span>
							<span>A</span>
							<span>River</span>
						</Box>
					</Box>
					<Typography variant="h2">🌊</Typography>
				</Box>
				{/* Statistics */}
				<Stats />
			</Box>
			{children}
			{/* <Box
				position="absolute"
				top="0"
				bottom="0"
				left="0"
				right="0"
				display="flex"
				zIndex="-1"
			>
				<Box
					position="relative"
					flex={1}
					overflow="hidden"
					style={{ filter: 'blur(200px)' }}
				>
					<Box
						position="absolute"
						top="0"
						bottom="0"
						left="0"
						right="0"
						style={{
							background: 'linear-gradient(#ff00e0, transparent)',
						}}
					/>
					<Box
						position="absolute"
						top="0"
						bottom="0"
						left="0"
						right="0"
						style={{
							background:
								'linear-gradient(to left, #0089ff, transparent)',
						}}
					/>
				</Box>
			</Box> */}
		</Box>
	);
}

export default AppContent;
