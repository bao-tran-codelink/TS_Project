"use strict";
var userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
//# sourceMappingURL=app.js.map