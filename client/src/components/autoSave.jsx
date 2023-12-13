import { useMutation } from "@apollo/client";
import { UPDATE_SAVE } from "../utils/mutations";
import Auth from '../utils/auth';
import { useEffect } from "react";

//still needs to work

const autoSave = () => {
  console.log('Auth', Auth.getProfile());
  const [updateSave] = useMutation(UPDATE_SAVE);
  
  useEffect(() => {
    saveCurrent();
  },[]);

  const saveCurrent = async () => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const userProfile = Auth.getProfile().data;
    try {
      console.log('userProfile', userProfile);
      const inventory = localStorage.getItem('inventory') || [];
      console.log('inventory', inventory);
      const notes = localStorage.getItem('notes') || '';
      console.log('notes', notes);
      const update = await updateSave({
        variables: { inventory: inventory, notes: notes }
      })

      if (!update) {
        throw new Error('something went wrong!');
      }

    } catch (err) {
      console.log(err);
    };
  }

  
  return ( 
    <><div></div></>
  );
}

export default autoSave;