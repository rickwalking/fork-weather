import { Pipe, PipeTransform } from '@angular/core';
import { IShowUserDTO } from '@user/dto/show-user.interface';

@Pipe({
    name: 'showName',
})
export class ShowNamePipe implements PipeTransform {
    transform(user: IShowUserDTO): string {
        return user.name;
    }
}
