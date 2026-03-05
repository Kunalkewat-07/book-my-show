var DataTypes = require("sequelize").DataTypes;
var _comment = require("./comment");
var _customer = require("./customer");
var _order = require("./order");
var _post = require("./post");
var _user = require("./user");

function initModels(sequelize) {
  var comment = _comment(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  order.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(order, { as: "Orders", foreignKey: "customer_id"});
  comment.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(comment, { as: "Comments", foreignKey: "post_id"});
  comment.belongsTo(user, { as: "deletedBy_User", foreignKey: "deletedBy"});
  user.hasMany(comment, { as: "Comments", foreignKey: "deletedBy"});
  comment.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(comment, { as: "user_Comments", foreignKey: "user_id"});
  comment.belongsTo(user, { as: "commentedBy_User", foreignKey: "commentedBy"});
  user.hasMany(comment, { as: "commentedBy_Comments", foreignKey: "commentedBy"});
  post.belongsTo(user, { as: "deletedBy_User", foreignKey: "deletedBy"});
  user.hasMany(post, { as: "Posts", foreignKey: "deletedBy"});
  post.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(post, { as: "user_Posts", foreignKey: "user_id"});
  user.belongsTo(user, { as: "deletedBy_User", foreignKey: "deletedBy"});
  user.hasMany(user, { as: "Users", foreignKey: "deletedBy"});

  return {
    comment,
    customer,
    order,
    post,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
