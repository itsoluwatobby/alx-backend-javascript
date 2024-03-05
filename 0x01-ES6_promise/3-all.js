import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photo, user] = [await uploadPhoto(), await createUser()];
    console.log(photo.body, `${user.firstName} ${user.lastName}`);
  }
  catch(error) {
    console.log('Signup system offline');
  }
}
