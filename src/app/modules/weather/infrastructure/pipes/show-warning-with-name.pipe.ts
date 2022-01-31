import { Pipe, PipeTransform } from '@angular/core';
import { IShowUserDTO } from '@user/dto/show-user.interface';

@Pipe({
    name: 'showWarningWithName',
})
export class ShowWarningWithName implements PipeTransform {
    transform(user: IShowUserDTO | null): string {
        if (user === null) {
            return '';
        }

        return `Ola, ${user.name}. Bem vindo ao Fork Weather.`;
    }
}
