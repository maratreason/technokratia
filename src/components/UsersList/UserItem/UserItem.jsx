import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, Card, CardContent, Typography, Avatar } from "@material-ui/core";
import { formatMoney, getFullName, updatedTime } from "../../../utils/utils";
import Modal from "../../Modal/Modal";

import imageSrc from "../../../assets/15.jpg";

const useStyles = makeStyles({
	root: {
		minWidth: "100%",
		display: "flex",
		justifyContent: "space-between",
		borderRadius: 4,
		cursor: "pointer",
		"&:not(:last-child)": {
			marginBottom: 18,
		},
		boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
	},
	cardContent: {
		display: "flex",
		alignItems: "center",
	},
	title: {
		fontSize: 15,
	},
	text: {
		fontSize: 15,
		marginLeft: 15,
		minWidth: 150
	},
	balance: {
		marginLeft: 50,
	},
	changed: {
		marginRight: 50,
	},
	describe: {
		marginRight: 50,
	},
});

const UserItem = (props) => {
	const classes = useStyles();
	const { fname, name, mname, balance, lastUpdatedAt } = props;

	const [openModal, setOpenModal] = React.useState(false);

	const handleClickOpen = () => {
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	return (
		<>
			{openModal && <Modal open={openModal} handleClose={handleClose} {...props} />}
			<Card className={classes.root} onClick={handleClickOpen}>
				<CardContent className={classes.cardContent}>
					<Avatar alt="Travis Howard" src={imageSrc} />
					<Typography className={classes.text}>{getFullName(fname, name, mname)}</Typography>
					<Typography className={classes.balance}>Баланс: {formatMoney(balance)}</Typography>
				</CardContent>
				<CardActions>
					<Typography className={classes.changed} color="textSecondary">
						Последнее изменение: {updatedTime(lastUpdatedAt)}
					</Typography>
					<Typography className={classes.describe}>Подписка активна</Typography>
				</CardActions>
			</Card>
		</>
	);
};

export default UserItem;
