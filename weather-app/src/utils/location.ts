interface LatLng {
  lat: number;
  lng: number;
}

export const getCurrentLocation = (): Promise<LatLng> => {
  return new Promise((resolve, reject) => {
    if (!navigator || !navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        reject(new Error(`${err.message}`));
      }
    );
  });
};
