import addZero from "utils/addZero";

const getDiffNowDeadline = (deadline: string) => {
  const deadlineValueOf = +new Date(deadline);
  const nowValueOf = +new Date();

  const remaining = deadlineValueOf - nowValueOf;

  return {
    day: Math.floor(remaining / (1000 * 60 * 60 * 24)).toString(),
    hour: addZero(Math.floor((remaining / (1000 * 60 * 60)) % 24)),
    minute: addZero(Math.floor((remaining / (1000 * 60)) % 60)),
    second: addZero(Math.floor((remaining / 1000) % 60)),
  };
};

export default getDiffNowDeadline;
