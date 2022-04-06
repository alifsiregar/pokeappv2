export const catchChance = () => {
  const chance = Math.floor(Math.random() * 2);
  const promise = new Promise((res) => {
    setTimeout(() => {
      if (chance === 0) {
        res(true);
      } else {
        res(false);
      }
    }, 1000);
  });

  return promise;
};
