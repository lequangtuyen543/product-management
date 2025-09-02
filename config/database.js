const { mongoose } = require('mongoose');

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Database error");
  }
}