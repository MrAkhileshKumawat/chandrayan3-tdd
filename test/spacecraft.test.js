const {spacecraft} = require('../src/spacecraft');

describe('spacecraft', () => {
    test('should move the spacecraft forward', () => {
        const startingPosition = [0, 0, 0];
        const initialDirection = 'N';
        const commands = ['f'];
        const { position, direction } = spacecraft(startingPosition, initialDirection, commands);
        expect(position).toEqual([0, 1, 0]);
        expect(direction).toEqual('N');
    });

    test('should move the spacecraft backward', () => {
        const startingPosition = [0, 0, 0];
        const initialDirection = 'N';
        const commands = ['b'];
        const { position, direction } = spacecraft(startingPosition, initialDirection, commands);
        expect(position).toEqual([0, -1, 0]);
        expect(direction).toEqual('N');
    });

    test('should turn the spacecraft right', () => {
        const startingPosition = [0, 0, 0];
        const initialDirection = 'N';
        const commands = ['r'];
        const { position, direction } = spacecraft(startingPosition, initialDirection, commands);
        expect(position).toEqual([0, 0, 0]);
        expect(direction).toEqual('E');
    });

    test('should turn the spacecraft left', () => {
        const startingPosition = [0, 0, 0];
        const initialDirection = 'N';
        const commands = ['l'];
        const { position, direction } = spacecraft(startingPosition, initialDirection, commands);
        expect(position).toEqual([0, 0, 0]);
        expect(direction).toEqual('W');
    });
});
