import { UserModel } from 'src/app/shared/models/user-model';
import * as UserActions from '../actions/user.actions';
import { UserActionTypes } from '../actions/user.actions';



const modalInitialState: UserModel[] = [];


export function userReducer(state = modalInitialState, action: UserActions.Actions) {

    switch (action.type) {
      case UserActionTypes.ProfileUser:
          console.log('state ', state);
          return [...state, action.payload ];
      default:
        return state;
    }
  }