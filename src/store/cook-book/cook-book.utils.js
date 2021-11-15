export const addOrRemoveFromCookBook = (list, receipe) => {
  const existingCard = list.find((card) => card.id === receipe.id);

  if (existingCard) {
    return list.filter((card) => card.id !== receipe.id);
  }
  if (!existingCard) {
    return [...list, receipe];
  }
};
