import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password:$password){
        token
        user{
            _id
            saves {
                _id
                inventory {
                    itemName
                    description
                }
                notes
            }
        }
      }
    }

`;

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!){
        addUser(email:$email, password:$password){
        token
        user{
            _id
            saves {
                _id
                inventory {
                    itemName
                    description
                }
                notes
            }
        }
      }
    }
`;

export const ADD_SAVE = gql`
    mutation addSave{
        addSave{
                    _id
                    inventory {
                        itemName
                        description
                    }
                    notes
        }
    }

`;

export const UPDATE_SAVE = gql`
    mutation updateSave($inventory: [String], $notes: String){
        updateSave(inventory: $inventory, notes: $notes){
            _id
            notes
            inventory {
                itemName
                description
            }
    }
 }
`;

export const ADD_ITEM = gql`
    mutation addItem($saveId: ID!){
        addItem(saveId: $saveId){
                _id
                inventory {
                    iteName
                    description
                }
                notes
        }
    }
`;

export const REMOVE_SAVE = gql`
    mutation removeSave($saveId: ID!){
        removeSave(saveId: $saveId){
            user{
                _id
            }
        }
    }

`;

export const SET_CURRENT = gql`
    mutation setCurrentSave($location: Int){
        setCurrentSave(location: $location){
            token
            user {
                _id
                saves {
                    _id
                    inventory {
                        itemName
                        description
                    }
                    notes
                }
                currentSave
            }
        }
    }`