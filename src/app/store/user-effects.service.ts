import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects'
import { createAction } from '@ngrx/store';
import { UserService } from '../../user.service';
import * as fromActions from './user.action';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';

@Injectable()
export class UserEffectsService {
constructor(private actions$ : Actions, private svc: UserService) { }
getAllusers$=createEffect(
()=>this.actions$.pipe(
    ofType(fromActions.getUsers),
    switchMap(()=>this.svc.getusers().pipe(
      map(data=>fromActions.getUsersSuccessMsg({users:data}))
    ))
))


}