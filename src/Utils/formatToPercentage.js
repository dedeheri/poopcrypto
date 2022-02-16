const formatToPercentage = (num) => {
  return num?.toString().length > 2
    ? num?.toString().substring(0, 4) + "%"
    : num?.toString();
};

export default formatToPercentage;
