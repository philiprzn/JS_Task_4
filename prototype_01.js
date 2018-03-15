function checkProto(propName, obj) {
    var objProto = obj.__proto__;
    for (var key in objProto){
        if (key === propName) return objProto[key];
    }
};


var obj = {
    a : 1,
    b : 2
};
var newObj = Object.create(obj);
newObj.c = 3;

// console.log(newObj.__proto__);

// checkProto('b', newObj);

console.log(checkProto('b', newObj));