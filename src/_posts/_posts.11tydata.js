module.exports = {
  tags: "post",
  layout: "default",
  permalink: '/{{ page.date | date: "%Y/%m/%d" }}/{{ page.fileSlug }}/',
  eleventyComputed: {
    title: (data) =>
      data.title ||
      data.page.fileSlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
  },
};
