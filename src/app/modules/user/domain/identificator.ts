import { ValueObject } from 'src/app/libs/value-objects';
import { IIdentificator } from '@user/domain/interfaces/id.interface';

export class Identificator extends ValueObject<IIdentificator> {
    private constructor(properties: IIdentificator) {
        super(properties);
    }

    public static create(identificator: string | undefined): Identificator {
        if (identificator === undefined) {
            throw new Error('Illegal data format');
        }

        return new Identificator({
            id: identificator,
        });
    }
}
