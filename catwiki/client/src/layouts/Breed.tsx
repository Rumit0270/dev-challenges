import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  searchBreeds,
  postFavouriteBreed,
  fetchBreedImages,
  IBreedDetail,
} from '../api/breedApiService';
import BreedDetail from '../components/BreedDetail';
import BreedImages from '../components/BreedImages';

const Breed: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [breedDetail, setBreedDetail] = useState<IBreedDetail | null>(null);
  const [breedImages, setBreedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const populateBreedData = async () => {
      try {
        setLoading(true);
        const breedRes = await searchBreeds(id);
        let foundBreed = breedRes.data[0];

        if (!foundBreed) {
          setBreedDetail(null);
          setBreedImages([]);
          setLoading(false);
          return;
        }

        await postFavouriteBreed(foundBreed.id, foundBreed.name, foundBreed.description);

        const foundBreedImagesRes = await fetchBreedImages(foundBreed.id);
        const foundBreedImages = foundBreedImagesRes.data;

        if (foundBreedImages[0]) {
          foundBreed.imageUrl = foundBreedImages[0];
        }

        setBreedDetail(foundBreed);
        setBreedImages(foundBreedImages.splice(1, 8));
        setLoading(false);
      } catch (err) {
        setBreedDetail(null);
        setBreedImages([]);
        setLoading(false);
      }
    };

    populateBreedData();
  }, [id]);

  if (loading) {
    return <section className="w-full flex justify-center items-center breed">Loading...</section>;
  }

  if (!breedDetail) {
    return (
      <section className="w-full flex justify-center items-center breed">
        Something went wrong!
      </section>
    );
  }

  return (
    <>
      <BreedDetail breed={breedDetail} />
      <BreedImages images={breedImages} />
    </>
  );
};

export default Breed;
