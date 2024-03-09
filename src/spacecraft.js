function spacecraft(startingPosition, initialDirection, commands){
    let [ x, y, z ] = startingPosition;
    let direction = initialDirection;

    for (let command of commands) {
        switch (command) {
            case 'f':
                moveForward();
                break;
            case 'b':
                moveBackward();
                break;
            default:
                break;
        }
    }

    function moveForward() {
        switch (direction) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
            case 'U':
                z++;
                break;
            case 'D':
                z--;
                break;
            default:
                break;
        }
    }

    function moveBackward() {
        switch (direction) {
            case 'N':
                y--;
                break;
            case 'S':
                y++;
                break;
            case 'E':
                x--;
                break;
            case 'W':
                x++;
                break;
            case 'U':
                z--;
                break;
            case 'D':
                z++;
                break;
            default:
                break;
        }
    }

    return { position: [x, y, z], direction }
}

module.exports = {spacecraft}