
import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/shared/models/user-model';

export enum UserActionTypes {
    ProfileUser = '[PROFILE_USER] UserProfile'
}

export class ProfileUser implements Action {
    readonly type = UserActionTypes.ProfileUser;
    constructor(public payload: UserModel) { }
}


export type Actions = ProfileUser;
  