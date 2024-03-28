const DataModel = require("../model/data.model");

exports.getData = async (req, res) => {
  try {
    const data = await DataModel.findOne();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving data", error: err });
  }
};

exports.postData = async (req, res) => {
  try {
    await DataModel.deleteMany(); // Remove existing entries
    const newData = await DataModel.create(req.body); // Insert new data
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: "Error posting data", error: err });
  }
};
