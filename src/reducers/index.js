import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux'; // takes object as argument


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer, // The key represents the state slice while the value represents the reducer
  masterTicketList: ticketListReducer
});

export default rootReducer;