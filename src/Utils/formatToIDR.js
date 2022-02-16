const formatToIDR = (num) => {
  const price = Number(num * 14290.05);

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

export default formatToIDR;
