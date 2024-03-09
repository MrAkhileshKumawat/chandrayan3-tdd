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

    test('should turn the spacecraft up', () => {
        const startingPosition = [0, 0, 0];
        const initialDirection = 'N';
        const commands = ['u'];
        const { position, direction } = spacecraft(startingPosition, initialDirection, commands);
        expect(position).toEqual([0, 0, 0]);
        expect(direction).toEqual('U');
    });

    test('should turn the spacecraft down', () => {
        const startingPosition = [0, 0, 0];
        const initialDirection = 'N';
        const commands = ['d'];
        const { position, direction } = spacecraft(startingPosition, initialDirection, commands);
        console.log(position,direction)
        expect(position).toEqual([0, 0, 0]);
        expect(direction).toEqual('D');
    });

    test('should move the spacecraft through a sequence of commands', () => {
        const startingPosition = [0, 0, 0];
        const initialDirection = 'N';
        const commands = ['f', 'r', 'u', 'b', 'l'];
        const { position, direction } = spacecraft(startingPosition, initialDirection, commands);
        expect(position).toEqual([0, 1, -1]);
        expect(direction).toEqual('N');
    });
});
