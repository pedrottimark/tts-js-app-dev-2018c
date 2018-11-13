export const findReactionObject = (reactions, workid) =>
  reactions.find(opinion => opinion.workid === workid);

export const getReactionString = (reactions, workid) => {
  const reactionObject = findReactionObject(reactions, workid);
  return reactionObject && reactionObject.reaction;
};

export const replaceReactionObject = (reactions, reactionObjectNext) =>
  reactions.map(reactionObjectPrev =>
    reactionObjectPrev.workid === reactionObjectNext.workid
      ? reactionObjectNext
      : reactionObjectPrev
  );
