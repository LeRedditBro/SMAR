import { Box, Divider, Paper } from '@mui/material';
import { memo, useState } from 'react';
import ProfileControls from './ProfileControls/ProfileControls';
import ProfileConfiguration from './ProfileConfiguration/ProfileConfiguration';
import Settings from './Settings/Settings';
import ScriptControls from './ScriptControls/ScriptControls';
import DragHandler from './DragHandler/DragHandler';

function Home() {
	const [running, setRunning] = useState(false);

	return (
		<DragHandler>
			<Box display="flex" flexDirection="column" gap="2rem" height="100%">
				<Box display="flex" gap="2rem">
					{/* Profile configuration */}
					<ProfileControls />

					{/* User preferences */}
					<Settings />
				</Box>

				<Box display="flex" width="100%" flex={1} gap="2rem">
					<Paper sx={{ mb: '2rem', flex: 1 }}>
						{/* Script + execution controls */}
						<ScriptControls
							running={running}
							setRunning={setRunning}
						/>
						<Divider />
						{/* Profile configuration */}
						<ProfileConfiguration running={running} />
					</Paper>
				</Box>
			</Box>
		</DragHandler>
	);
}

export default memo(Home);
