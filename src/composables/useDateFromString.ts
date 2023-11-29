export const dateFromString = (date_string: string) => {
  let date = new Date(date_string);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
  return formattedDate;
};
