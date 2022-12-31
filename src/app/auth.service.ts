import {Injectable} from '@angular/core'
import {IUser} from './classes/user.model'

@Injectable()
export class AuthService{
   public currentUser !: IUser ;
    loginUser(username: string, password: string){
        this.currentUser = {
            id:1,
            userName: username,
            firstName : 'Price',
            lastName : 'Harsha'
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    
}