import * as firebase from 'firebase/app';

export const uploadImage = (file: File) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Get a reference to the storage service, which is used to create references in your storage bucket
      const storage = firebase.storage();

      // Create a storage reference from our storage service
      const storageRef = storage.ref();

      // Create a child storage ref
      const imageRef = storageRef.child(
        `images/${Date.now().toString()}-${file.name}`
      );

      const snapshot = await imageRef.put(file);

      const downloadUrl = await snapshot.ref.getDownloadURL();

      resolve(downloadUrl);
    } catch (err) {
      reject(err);
    }
  });
};
