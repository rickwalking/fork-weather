import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { InitialFormManagerService } from '@initial/services/initial-form.manager.service';

describe('#Integration - InitialFormManager', (): void => {
    let service: InitialFormManagerService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [InitialFormManagerService],
            imports: [ReactiveFormsModule],
        });

        service = TestBed.inject(InitialFormManagerService);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    describe('#getFormInstance', (): void => {
        it('should be able to return a formInstance', (): void => {
            expect(service.getFormInstance().valid).toBe(false);
            expect(service.getFormInstance().value).toEqual({
                name: '',
                visitorMode: false,
            });
        });
    });

    describe('#isFormValid', (): void => {
        it('should form.valid return false if form has initial value', (): void => {
            expect(service.isFormValid()).toBe(false);
        });

        it('should return false if form has invalid name value', (): void => {
            service.setName('a');
            service.setVisitorMode(false);

            expect(service.isFormValid()).toBe(false);
        });

        it('should return false if form has invalid visitorMode value', (): void => {
            service.setName('a');
            service.setVisitorMode(false);

            expect(service.isFormValid()).toBe(false);
        });

        it('should return true if form has valid values', (): void => {
            service.setName('randomName');

            expect(service.isFormValid()).toBe(true);
        });
    });

    describe('#setName', () => {
        afterEach((): void => {
            service.getFormInstance().reset();
        });

        it('should set new name received as argument', (): void => {
            service.setName('randomName');

            expect(service.getFormInstance().controls['name'].value).toBe('randomName');
        });
    });

    describe('#setVisitorMode', () => {
        afterEach((): void => {
            service.getFormInstance().reset();
        });

        it('should set new boolean value received as argument', (): void => {
            service.setVisitorMode(true);

            expect(service.getFormInstance().controls['visitorMode'].value).toBe(true);
        });
    });

    describe('#toggleNameControlAvailability', (): void => {
        it('should disable name control if visitorMode is true', (): void => {
            service.toggleNameControlAvailability(true);

            expect(service.getFormInstance().controls['name'].disabled).toBe(true);
        });

        it('should enable name control if visitorMode is true', (): void => {
            service.toggleNameControlAvailability(false);

            expect(service.getFormInstance().controls['name'].disabled).toBe(false);
        });
    });
});
