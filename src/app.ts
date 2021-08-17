let userInput: unknown;

function generateError(message: string, code: number) {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);