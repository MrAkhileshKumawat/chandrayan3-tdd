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
});
