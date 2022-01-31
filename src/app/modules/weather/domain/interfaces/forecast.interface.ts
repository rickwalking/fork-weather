export interface IForecast {
    name: string;
    main: {
        temp: number;
        pressure: number;
        feels_like: number;
        temp_max: number;
        temp_min: number;
    };
}
