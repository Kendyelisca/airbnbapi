const Image = require("./Image");
const User = require("./User");

User.hasMany(Image);
Image.belongsTo(User);
