import { useEffect, useState } from "react";
import getDiffNowDeadline from "utils/getDiffNowDeadline";

const initDate = {
  day: "30",
  hour: "23",
  minute: "59",
  second: "59",
};

const useDiffDate = (deadline: string) => {
  const [date, setDate] = useState(initDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const { day, hour, minute, second } = getDiffNowDeadline(deadline);

      setDate({
        day,
        hour,
        minute,
        second,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return { date, setDate };
};

export default useDiffDate;
