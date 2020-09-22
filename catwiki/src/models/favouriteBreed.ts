import mongoose, { Schema } from 'mongoose';

const favouriteBreedSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  breedId: {
    type: String,
    required: true,
  },
  defaultImageUrl: String,
  searchCount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('FavouriteBreed', favouriteBreedSchema);
