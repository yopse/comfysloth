export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format((number * 25) / 100);
};

export const getUniqueValues = () => {};
