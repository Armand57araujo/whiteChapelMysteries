import {gql} from '@apollo/client';

export const QUERY_SAVE = gql`
    query Save {
        save {
            _id
            notes
            inventory {
                itemName
                description
            }
        }
    }
`;

export const GET_ME = gql`
    {
        me{
            _id
            email
            currentSave
            saves
        }
    }
`;
