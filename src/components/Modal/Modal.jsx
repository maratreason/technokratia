import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button, DialogActions, DialogContent, DialogTitle, Divider, makeStyles, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
	modal: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: 25,
		"& svg": {
			fill: "#6979F8",
			cursor: "pointer",
		},
	},
	dialogTitle: {
		fontSize: 34,
		fontWeight: 700,
	},
	dialogActions: {
		padding: 25,
	},
	dialogInputs: {
		display: "flex",
		"& .MuiFormControl-root:not(:last-child)": {
			marginRight: 10,
		},
	},
	dialogSubscribe: {
		marginTop: 20,
	},
	button: {
		backgroundColor: "#6979F8",
		fontSize: 13,
	},
});

const Modal = ({ open, handleClose, fname, name, mname, status }) => {
	const classes = useStyles();

	return (
		<Dialog open={open} onClose={handleClose}>
			<div className={classes.modal}>
				<DialogTitle className={classes.dialogTitle}>
					{fname} {name}
				</DialogTitle>
				<CloseIcon onClick={handleClose} />
			</div>
			<Divider />
			<DialogContent className={classes.dialogActions}>
				<div className={classes.dialogInputs}>
					<TextField type="text" size={"small"} variant="outlined" value={fname} disabled />
					<TextField type="text" size={"small"} variant="outlined" value={name} disabled />
					<TextField type="text" size={"small"} variant="outlined" value={mname} disabled />
				</div>
				<div className={classes.dialogSubscribe}>
					<TextField
						type="text"
						size={"small"}
						variant="outlined"
						value={status === 1 ? "Подписка активна" : "Не подписан"}
						disabled
					/>
				</div>
			</DialogContent>
			<DialogActions className={classes.dialogActions}>
				<Button className={classes.button} color={"primary"} onClick={handleClose} variant="contained">
					Сохранить
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Modal;
