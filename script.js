//your JS code here. If required.

Object.prototype.getKeys = function () {
    return Object.keys(this);
};

let student = {
	name: 'Mahendra',
	age: 21,
	city: 'kakinada'
};



console.log(student.getKeys());