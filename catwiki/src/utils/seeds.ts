import breeds from '../seeds/favouriteBreeds.json';
import FavouriteBreed from '../models/favouriteBreed';

export const seedFavouriteBreeds = async (seedFavouritedBreed: boolean) => {
  if (!seedFavouritedBreed) {
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
        imageUrl: item.imageUrl,
      });
    });

    await FavouriteBreed.collection.deleteMany({});
    await FavouriteBreed.collection.insertMany(favouriteBreeds);
  } catch (err) {
    throw err;
  }
};
