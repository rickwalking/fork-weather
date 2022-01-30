export abstract class Entity<T> {
    public readonly properties: T;

    constructor(properties: T) {
        this.properties = properties;
    }
}
