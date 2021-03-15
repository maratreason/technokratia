import React from "react";
import { Container, createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import UsersList from "./components/UsersList/UsersList";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#333996",
			light: "#3c44b126",
		},
		secondary: {
			main: "#f83245",
			light: "#f8324526",
		},
		background: {
			default: "#E5E5E5;",
		},
	},
	overrides: {},
	props: {
		MuiIconButton: {
			disableRipple: true,
		},
	},
});

const useStyles = makeStyles({
	appMain: {
		width: "100%",
	},
	navbarMenu: {},
	content: {
		background: "#f7f7f7;",
		padding: "47px 0",
	},
});

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<NavbarMenu className={classes.navbarMenu} />
			</Container>
			<div className={classes.content}>
				<Container>
					<UsersList />
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
