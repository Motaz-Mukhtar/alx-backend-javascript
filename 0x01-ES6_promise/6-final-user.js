import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(data => {
      const response = [];
      data.forEach((value) => {
        if (value.status === 'fulfilled') {
          response.push(value);
        } else {
          response.push({
            status: value.status,
            value: `Error: ${value.reason.message}`,
          });
        }
      });
      return response;
    });
}
