import { ValueObject } from 'src/app/libs/value-objects';
import { IName } from '@user/domain/interfaces/name.interface';

export class Name extends ValueObject<IName> {
    private constructor(properties: IName) {
        super(properties);
    }

    public static create(name: string | undefined): Name {
        if (name === undefined || name.length === 1) {
            throw new Error('Illegal user name');
        }

        if (name === '') {
            name = 'Visitante';
        }

        return new Name({
            name,
        });
    }
}
