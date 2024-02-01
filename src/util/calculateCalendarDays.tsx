export const calculateCalendarDays = (curDate: Date): (number | null)[] => {
  const thisLast = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    0
  ).getDate();
  const firstDay = new Date(curDate.getFullYear(), curDate.getMonth()).getDay();

  const calendarDays: (number | null)[] = Array.from(
    { length: thisLast },
    (_, index) => index + 1
  );
  //1일 앞 날짜에 null 추가
  for (let i = 0; i < firstDay; i++) {
    calendarDays.unshift(null);
  }
  console.log(calendarDays);
  return calendarDays;
};
