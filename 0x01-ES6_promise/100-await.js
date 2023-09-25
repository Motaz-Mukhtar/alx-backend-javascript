import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userData = {
    photo: null,
    user: null,
  };

  uploadPhoto()
  .then(value => userData.photo = value)
  .catch(err => { return userData });

  createUser()
  .then(value => userData.user = value)
  .catch(err => {
    userData.phtot = null;
    return userData;
  });

  return userData;
}
