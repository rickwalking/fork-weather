import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GeolocationService {
    hasGeolocationSupport(): boolean {
        return 'geolocation' in navigator;
    }

    getGeolocation(successCallback: PositionCallback): void {
        if (!this.hasGeolocationSupport()) {
            return;
        }

        return navigator.geolocation.getCurrentPosition(successCallback);
    }
}
