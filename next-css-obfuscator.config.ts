module.exports = {
  enable: true,
  mode: "random", // random | simplify | simplify-seedable
  refreshClassConversionJson: false, // recommended set to true if not in production
  classPrefix: "as", // Prefix of the obfuscated class name.
  classLength: 5, // Length of the obfuscated class name.
  allowExtensions: [".jsx", ".tsx", ".js", ".ts", ".html", ".rsc"],
};
