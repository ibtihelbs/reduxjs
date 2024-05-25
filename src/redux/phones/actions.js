export const BUY_PHONE = "BUY_PHONE";

export const phoneCreator = (number) => {
  return {
    type: BUY_PHONE,
    payload: number,
  };
};
