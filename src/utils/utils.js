export const getFullName = (fname, name, mname) => {
	return `${fname} ${getFirstLetter(name)}. ${getFirstLetter(mname)}.`;
};

export const updatedTime = (date) => {
	let newDate = new Date(date);
	let formatter = new Intl.DateTimeFormat("ru", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	});
	return formatter.format(newDate);
};

export const formatMoney = (number) => {
	return new Intl.NumberFormat('ru-RU').format(number.toFixed(2)).replace(",", ".");
}

const getFirstLetter = (name) => String(name)[0].toUpperCase();
