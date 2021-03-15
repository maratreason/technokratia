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
	return new Intl.NumberFormat("ru-RU").format(number.toFixed(2)).replace(",", ".");
};

export const formatDate = (inputDate) => {
	let date = new Date(inputDate);
	let dayOfMonth = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let diffMs = new Date() - date;
	let diffSec = Math.round(diffMs / 1000);
	let diffMin = diffSec / 60;
	let diffHour = diffMin / 60;
	let diffDay = Math.round(diffHour / 24);
	let diffMonth = Math.round(diffDay / 30);

	// форматирование
	year = year.toString().slice(-2);
	month = month < 10 ? "0" + month : month;
	dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
	hour = hour < 10 ? "0" + hour : hour;
	minutes = minutes < 10 ? "0" + minutes : minutes;

	if (diffSec < 1) {
		return "прямо сейчас";
	} else if (diffMin < 1) {
		return `${diffSec} сек. назад`;
	} else if (diffHour < 1) {
		return `${diffMin} мин. назад`;
	} else if (diffDay < 1) {
		return `${diffHour} часов. назад`;
	} else if (diffMonth < 1) {
		return `${diffDay} дней. назад`;
	} else {
		return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
	}
}

const getFirstLetter = (name) => String(name)[0].toUpperCase();
