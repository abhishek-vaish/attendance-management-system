exports.currDate = () => {
  const currentDate = new Date();

  const reqDate =
    (currentDate.getFullYear() < 10 ? "0" : "") +
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() < 9 ? "0" : "") +
    (currentDate.getMonth() + 1) +
    "-" +
    (currentDate.getDate() < 10 ? "0" : "") +
    currentDate.getDate();

  return reqDate;
};

exports.currTime = () => {
  const currentDate = new Date();

  const reqTime =
    (currentDate.getHours() < 10 ? "0" : "") +
    currentDate.getHours() +
    ":" +
    (currentDate.getMinutes() < 10 ? "0" : "") +
    currentDate.getMinutes() +
    ":" +
    (currentDate.getSeconds() < 10 ? "0" : "") +
    currentDate.getSeconds();

  return reqTime;
};
