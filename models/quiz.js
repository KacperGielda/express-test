const mongosse = require("mongoose");
const Schema = mongosse.Schema;

const quizSchema = new Schema({
    title: { type: String, required: true },
    vote: { type: Number, required: true, default: 0 },
});

module.exports = mongosse.model("Quiz", quizSchema);
