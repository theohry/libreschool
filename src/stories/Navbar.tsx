import React from "react";
import {
	AppBar,
	Toolbar,
	Box,
	IconButton,
	Typography,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface NavbarProps {
	variant?: "transparent" | "solid";
	fullWidth?: boolean;
	sticky?: boolean;
}

export const Navbar = ({
	variant = "solid",
	fullWidth = true,
	sticky = true,
}: NavbarProps) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
