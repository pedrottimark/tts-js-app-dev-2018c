const counterInitial = {
  val: 0,
  max: 10,
};

export default (counter = counterInitial, action) => {
  switch (action.type) {
    default:
      return counter;
  }
};
