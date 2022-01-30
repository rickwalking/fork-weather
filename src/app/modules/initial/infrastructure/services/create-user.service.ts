import { Injectable } from '@angular/core';
import { InitialFormManagerService } from '@initial/infrastructure/services/initial-form.manager.service';
import { ICreateUserDTO } from '@user/dto/create-user.interface';
import { UserService } from '@user/infrastructure/services/user.service';

@Injectable({
    providedIn: 'root',
})
export class CreateUserService {
    constructor(
        private initialFormService: InitialFormManagerService,
        private userService: UserService,
    ) {}

    createUser(): void {
        const user: ICreateUserDTO = {
            name: this.initialFormService.getName(),
        };

        this.userService.create(user);
    }
}
