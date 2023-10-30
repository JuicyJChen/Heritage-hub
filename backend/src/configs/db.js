const mongoose = require("mongoose")

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://jordchen:BtjekoM36VkjUlN0@cluster0.5zynf14.mongodb.net/?retryWrites=true&w=majority"
  )
}

module.exports = connect
