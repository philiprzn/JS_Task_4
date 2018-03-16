function uppFL(str) {

    var arr = str.split(' ');
    var result = [];

    arr.map(function (item, i) {
        item = item[0].toUpperCase() + item.slice(1);
        result.push(item)

        // console.log(item);
        // console.log(item[0].toUpperCase());
    });

    newStr = result.join(' ');

    return newStr;
}


console.log(uppFL('i am cool'));