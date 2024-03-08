export const getDateWithoutTime = (date: Date) => {
  const newDate = new Date(date); // 입력된 날짜를 복제하여 새로운 날짜 객체 생성
  newDate.setHours(0, 0, 0, 0); // 시간 부분을 모두 00:00:00으로 설정
  return newDate; // 새로운 날짜 객체 반환
};
