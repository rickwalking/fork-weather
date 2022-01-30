import { Entity } from 'src/app/libs/entity';
import { Identificator } from '@user/domain/identificator';
import { IUser } from '@user/domain/interfaces/user.interface';
import { Name } from '@user/domain/name';

export class User extends Entity<IUser> {
    private constructor(properties: IUser) {
        super(properties);
    }

    public static create(properties: IUser): User {
        try {
            const nameInstance: Name = Name.create(properties.name);
            const identificator: Identificator = Identificator.create(properties.id);

            return new User({
                id: identificator.properties.id,
                name: nameInstance.properties.name,
            });
        } catch {
            throw new Error('Invalid data on User creation');
        }
    }
}
