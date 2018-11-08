export const findOpinion = (opinions, workid) => {
  const item = opinions.find(opinion => opinion.workid === workid);
  return item && item.opinion;
};
