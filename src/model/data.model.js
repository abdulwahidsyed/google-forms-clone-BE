// const mongoose = require("mongoose");

// const dataSchema = new mongoose.Schema(
//   {
//     // Define your schema for the array of objects here
//     details: [
//       {
//         // Example field
//         key: String,
//         value: String,
//       },
//     ],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Data", dataSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    data: Schema.Types.Mixed, // Allows any data type
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", dataSchema);
