function checkProto(propName, obj) {
    var objProto = obj.__proto__;

    for(var prop in obj){
        if (obj.hasOwnProperty(prop) && prop === propName) return false;
    }

    for (var key in objProto){
        if (key === propName) return objProto[key];
    }

    return false;
};


var obj = {
    a : 1,
    b : 2,
    d : {
        x : 9,
        y : false
    }
};
var newObj = Object.create(obj);
newObj.c = 3;

// console.log(newObj.__proto__);

// checkProto('b', newObj);

console.log(checkProto('d', newObj));
console.log(checkProto('c', newObj));