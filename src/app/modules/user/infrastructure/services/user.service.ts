import { Injectable } from '@angular/core';
import { IUser } from '@user/domain/interfaces/user.interface';

import { User } from '@user/domain/user';
import { ICreateUserDTO } from '@user/dto/create-user.interface';
import { UserFacade } from '@user/infrastructure/state/facade/user.facade';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private userFacade: UserFacade) {}

    public create({ name }: ICreateUserDTO): void {
        const user: User = User.create({
            id: uuidv4(),
            name,
        });

        this.persistOnState(user);
    }

    public persistOnState(user: User): void {
        if (user.properties?.name === undefined || user.properties.id === undefined) {
            return;
        }

        const newUser: IUser = {
            name: user.properties.name,
            id: user.properties.id,
        };

        this.userFacade.addUser(newUser);
    }
}
