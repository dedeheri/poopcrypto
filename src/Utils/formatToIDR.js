const formatToIDR = (num) => {
  const price = num * 14321;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

export default formatToIDR;
