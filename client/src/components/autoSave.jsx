import { useMutation } from "@apollo/client";
import { UPDATE_SAVE } from "../utils/mutations";
import Auth from '../utils/auth';

//still needs to work


const autoSave = async () => {
  console.log('Auth', Auth.getProfile());
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const [updateSave] = useMutation(UPDATE_SAVE);

  if (!token) {
    return false;
  }

  const userProfile = Auth.getProfile().data;
  try {
    console.log('userProfile', userProfile);
    const update = await updateSave({
      variables: { inventory: localStorage.getItem('inventory') || userProfile.inventory, notes: localStorage.getItem('notes') || userProfile.notes }
    })

    if (!update) {
      throw new Error('something went wrong!');
    }

  } catch (err) {
    console.log(err);
  };
  return ( 
    <></>
  );
}

export default autoSave;