// const purgecss = require("@fullhuman/postcss-purgecss")({
//   content: ["./public/**/*.html", "./src/**/*.svelte"],
//   keyframes: true,
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/%]+/g) || []
// });

// module.exports = {
//   plugins: [require("cssnano"), ...(process.env.NODE_ENV === "production" ? [purgecss] : []), require("tailwindcss")("tailwind/tailwind.js"), require("autoprefixer"), require("postcss-import")]
// };

const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default"
    }),
    require("tailwindcss")("tailwind.config.js"),
    require("postcss-import"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      purgecss({
        content: ["./**/*.html"],
        keyframes: true
      })
  ]
};
