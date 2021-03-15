import React, { useState } from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#fff",
		minWidth: 50,
		"& .MuiTab-textColorPrimary": {
			fontSize: 13,
			color: "#D0C9D6",
		},
		"& .MuiTab-textColorPrimary.Mui-selected": {
			color: "#000",
			fontWeight: 500,
		},
		"& .MuiTabs-indicator": {
			backgroundColor: "#6979F8",
			width: 47,
			height: 3,
		},
	},
	btnRoot: {
		backgroundColor: "green",
	},
	btnLabel: {
		backgroundColor: "red",
	},
}));

const NavbarMenu = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [menu, setMenu] = useState([
		{ id: 1, label: "Все", href: "/" },
		{ id: 2, label: "Заблокированные", href: "/blocked" },
		{ id: 3, label: "Активные", href: "/active" },
	]);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	return (
		<Tabs value={value} textColor="primary" onChange={handleChange} className={classes.root}>
			{menu && menu.map((m) => <Tab key={m.id} label={m.label} />)}
		</Tabs>
	);
};

export default NavbarMenu;
