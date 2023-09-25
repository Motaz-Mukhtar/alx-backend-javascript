import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then(uploadData => {
    createUser().then(userData => {
      console.log(uploadData.body, userData.firstName, userData.lastName);
    }).catch(err => console.log('Signup system offline'))
  }).catch(err => console.log('Signup system offline'));
}
