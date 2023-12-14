import { useMutation } from "@apollo/client";
import { UPDATE_SAVE } from "../utils/mutations";
import Auth from '../utils/auth';
import { useEffect } from "react";

//still needs to work

const AutoSave = () => {
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
      console.log('userProfile front', userProfile);
      const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
      console.log('inventory front', inventory);
      const notes = localStorage.getItem('notes') || '';
      console.log('notes front', notes);
      const update = await updateSave({
        variables: { inventory: JSON.stringify(inventory), notes: notes }
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

export default AutoSave;