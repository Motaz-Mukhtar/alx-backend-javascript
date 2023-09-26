import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userData = {
    photo: null,
    user: null,
  };

  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({ photo, user });
  } catch (err) {
    return { photo: null, user: null };
  }
}
