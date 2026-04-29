module.exports = function (eleventyConfig) {
  // Asset directories — copy verbatim
  [
    "src/css",
    "src/images",
    "src/files",
    "src/fonts",
    "src/jhsd-history/css",
    "src/jhsd-history/img",
    "src/jhsd-history/js",
    "src/.well-known",
  ].forEach((dir) => eleventyConfig.addPassthroughCopy(dir));

  // Standalone HTML areas (Angular app, JS sandbox, embeds, blank pages, GH verification)
  // are not Liquid templates; copy them as-is and skip template processing.
  [
    "src/jl",
    "src/tests",
    "src/blank",
    "src/efk",
    "src/404.html",
    "src/googleb8e00ca3c029d7f6.html",
  ].forEach((p) => {
    eleventyConfig.addPassthroughCopy(p);
    eleventyConfig.ignores.add(p);
  });

  // Root-level static files
  [
    "src/CNAME",
    "src/robots.txt",
    "src/humans.txt",
    "src/keybase.txt",
    "src/favicon.ico",
    "src/bikes.json",
    "src/GruntFile.js",
  ].forEach((f) => eleventyConfig.addPassthroughCopy(f));

  // Skip stale Jekyll build artifacts that may linger inside src/
  eleventyConfig.ignores.add("src/_site");
  eleventyConfig.ignores.add("src/.jekyll-cache");

  // Lets existing `layout: default` frontmatter resolve to default.html
  eleventyConfig.addLayoutAlias("default", "default.html");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    templateFormats: ["html", "md", "liquid"],
  };
};
