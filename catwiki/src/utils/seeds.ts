import breeds from '../seeds/favouriteBreeds.json';
import FavouriteBreed from '../models/favouriteBreed';

const seedDb: boolean = process.env.SEED_DB === 'true' ? true : false;

export const seedFavouriteBreeds = async () => {
  if (!seedDb) {
    return;
  }

  try {
    const favouriteBreeds: any[] = [];

    breeds.map((item) => {
      favouriteBreeds.push({
        name: item.name,
        description: item.description,
        breedId: item.id,
        searchCount: 0,
      });
    });

    await FavouriteBreed.collection.deleteMany({});
    await FavouriteBreed.collection.insertMany(favouriteBreeds);
  } catch (err) {
    throw err;
  }
};
