
function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb} the ${adjective} ${noun}.`);
}

madLib('make', 'best', 'guac');





function titleize(arr, cb) {
    let titleized = arr.map(name => `Mx ${name} Jingleheimer Schmidt`);
        cb(titleized);
};

titleize(["Mary", "Brian", "Leo"], (arr) => {
    arr.forEach(element => console.log(element));
    });

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes phrRRRRRRRR!!!!!`);
};

Elephant.prototype.grow = function () {
    this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
     this.tricks.push(trick);   
};

Elephant.prototype.play = function () {
    console.log(this.tricks)
}