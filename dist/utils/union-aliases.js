"use strict";
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 9] = "ADMIN";
    ROLE[ROLE["READ_ONLY_USER"] = 10] = "READ_ONLY_USER";
    ROLE[ROLE["AUTHOR"] = 11] = "AUTHOR";
})(ROLE || (ROLE = {}));
var person = {
    name: 'Bao',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: [2, ROLE.ADMIN],
};
person.role.push(ROLE.ADMIN);
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=union-aliases.js.map