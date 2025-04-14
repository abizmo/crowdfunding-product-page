const calculateDaysLeft = (targetDate: Date) => {
  const today = new Date();

  const difference = targetDate.valueOf() - today.valueOf();

  const daysLeft = Math.ceil(difference / (24 * 60 * 60 * 1000));

  return daysLeft;
};

export default calculateDaysLeft;
