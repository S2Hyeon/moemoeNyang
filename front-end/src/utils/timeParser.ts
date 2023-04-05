function useTimeParser(localDateArray: number[]): string {
  const day = `${localDateArray[0]}-${localDateArray[1]}-${localDateArray[2]}`;
  const time = `${localDateArray[3]}:${localDateArray[4]}:${localDateArray[5]}`;
  const parse = `${day} ${time}`;
  const date = new Date(parse);
  const result = gapGetter(date);
  return result;
}

function gapGetter(published_date: Date): string {
  const now = Date.now();
  const gap = now - published_date.getTime();
  let published_date_message: string;
  if (gap < 60 * 1000) {
    published_date_message = "방금 전";
  } else if (gap < 60 * 60 * 1000) {
    published_date_message = `${Math.floor(gap / (60 * 1000))}분 전`;
  } else if (gap < 24 * 60 * 60 * 1000) {
    published_date_message = `${Math.floor(gap / (60 * 60 * 1000))}시간 전`;
  } else if (gap < 15 * 24 * 60 * 60 * 1000) {
    published_date_message = `${Math.floor(gap / (24 * 60 * 60 * 1000))}일 전`;
  } else if (gap < 365 * 24 * 60 * 60 * 1000) {
    published_date_message = `${Math.floor(
      gap / (30 * 24 * 60 * 60 * 1000),
    )}개월 전`;
  } else {
    published_date_message = `${Math.floor(
      gap / (365 * 24 * 60 * 60 * 1000),
    )}년 전`;
  }
  return published_date_message;
}

export default useTimeParser;
