import {gql} from '@apollo/client';

export const QUERY_SAVE = gql`
     {
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
            saves {
                _id
                notes
                inventory {
                    itemName
                    description
                }
            }
        }
    }
`;
