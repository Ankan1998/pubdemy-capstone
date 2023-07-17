const mongoose = require('mongoose');
const {Schema} = mongoose;

const videoSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model('Video', videoSchema);
export default Video;