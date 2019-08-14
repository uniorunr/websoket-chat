const formatDate = (ms: number) => {
  const date = new Date(ms);
  const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
  const minutes =
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  const seconds =
    date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`;
  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const month =
    date.getMonth() >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
};

export { formatDate };
