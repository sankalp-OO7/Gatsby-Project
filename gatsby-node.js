const path = require("path");
const fs = require("fs");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const industryTemplate = path.resolve("src/templates/industry-template.js");

  // Read the JSON data file
  const data = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "src/data/industries.json"), "utf-8")
  );

  // Iterate over each industry and create a page
  data.industries.forEach((industry) => {
    createPage({
      path: `/industries/${industry.name}`,
      component: industryTemplate,
      context: {
        slug: industry.name, // Corrected to use `industry.name`
        industry, // Pass entire industry data to the context
      },
    });
  });
};

// Add the GraphQL schema for JSON data
exports.sourceNodes = ({ actions, schema }) => {
  actions.createTypes(`
    type Industry implements Node {
      name: String!
      image: String!
      points: JSON!
    }
  `);
};
