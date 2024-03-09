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
            case 'r':
                turnRight();
                break;
            case 'l':
                turnLeft();
                break;
            case 'u':
                turnUp();
                break;
            case 'd':
                turnDown();
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

    function turnRight() {
        switch (direction) {
            case 'N':
                direction = 'E';
                lastHorizontalDirection = 'E';
                break;
            case 'S':
                direction = 'W';
                lastHorizontalDirection = 'W';
                break;
            case 'E':
                direction = 'S';
                lastHorizontalDirection = 'S';
                break;
            case 'W':
                direction = 'N';
                lastHorizontalDirection = 'N';
                break;
            case 'U':
                direction = lastHorizontalDirection === 'E' ? 'S' : lastHorizontalDirection === 'W' ? 'N' : lastHorizontalDirection === 'N' ? 'E' : 'W';
                break;
            case 'D':
                direction = lastHorizontalDirection === 'E' ? 'N' : lastHorizontalDirection === 'W' ? 'S' : lastHorizontalDirection === 'N' ? 'W' : 'E';
                break;
            default:
                break;
        }
    }

    function turnLeft() {
        switch (direction) {
            case 'N':
                direction = 'W';
                lastHorizontalDirection = 'W';
                break;
            case 'S':
                direction = 'E';
                lastHorizontalDirection = 'E';
                break;
            case 'E':
                direction = 'N';
                lastHorizontalDirection = 'N';
                break;
            case 'W':
                direction = 'S';
                lastHorizontalDirection = 'S';
                break;
            case 'U':
                direction = lastHorizontalDirection === 'E' ? 'N' : lastHorizontalDirection === 'W' ? 'S' : lastHorizontalDirection === 'N' ? 'W' : 'E';
                break;
            case 'D':
                direction = lastHorizontalDirection === 'E' ? 'S' : lastHorizontalDirection === 'W' ? 'N' : lastHorizontalDirection === 'N' ? 'E' : 'W';
                break;
            default:
                break;
        }
    }

    function turnUp() {
        switch (direction) {
            case 'N':
            case 'S':
            case 'E':
            case 'W':
                direction = 'U';
                break;
            default:
                break;
        }
    }

    function turnDown() {
        switch (direction) {
            case 'N':
            case 'S':
            case 'E':
            case 'W':
                direction = 'D';
                break;
            default:
                break;
        }
    }

    return { position: [x, y, z], direction }
}

module.exports = {spacecraft}