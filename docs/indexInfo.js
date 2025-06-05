const basicInfo = require('./basicInfo');
const components = require("./components");
const dashboard = require("./dashboard")
module.exports = {
    ...basicInfo,
    ...components,
    ...dashboard
};
