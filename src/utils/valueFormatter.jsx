const valueFormatter = (value) =>
  new Intl.NumberFormat("en-US").format(value).replace(/,/g, ".");

export default valueFormatter;
