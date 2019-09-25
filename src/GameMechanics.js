const levelUp = (level, currentExp, nextExp) => {
  if (currentExp >= nextExp) {
    level = level + 1;
    currentExp = 0;
    nextExp = 2 ** nextExp;
  }
  return { level, currentExp, nextExp };
};

export default levelUp;
