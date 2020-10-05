const mongosse = require("mongoose");
const Schema = mongosse.Schema;

const newsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now },
});

module.exports = mongosse.model("News", newsSchema);
