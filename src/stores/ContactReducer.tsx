import * as actionTypes from './actionTypes';
import {ContactAction, ContactState, IContact} from './types';

const initialState: ContactState = {
  contacts: [
    {
      id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Bilbo',
      lastName: 'Baggins',
      age: 111,
      photo:
        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
    },
    {
      id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 20,
      photo: 'N/A',
    },
  ],
};

const contactReducer = (
  state: ContactState = initialState,
  action: ContactAction,
): ContactState => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      const newArticle: IContact = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        age: action.payload.age,
        photo: action.payload.photo,
      };
      return {
        ...state,
        contacts: state.contacts.concat(newArticle),
      };

    case actionTypes.REMOVE_CONTACT:
      const updatedArticles: IContact[] = state.contacts.filter(
        contact => contact.id !== action.payload.id,
      );
      return {
        ...state,
        contacts: updatedArticles,
      };
  }
  return state;
};

export default contactReducer;
