import axios from "axios";
import React, { useEffect, useState } from "react";
import UserItem from "./UserItem/UserItem";

const UsersList = () => {
	const [users, setUsers] = useState();

	const fetchUsers = async () => {
		const { data } = await axios.get("https://watchlater.cloud.technokratos.com/get/array");
		setUsers(data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return <div>{users && users.map((user) => <UserItem key={user.id} {...user} />)}</div>;
};

export default UsersList;
