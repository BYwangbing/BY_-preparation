class Person {
    constructor(x) {
        this.x = x;
    }

    getX() {
        console.log(this.x);
    }
}

// Student.prototype.__proto__ = Person.prototype
class Student extends Person {
    constructor(y) {
        super(); // ==> Person.call(this)
        // super(200); // ==> Person.call(this, 200)
        this.y = y;
    }

    getY() {
        console.log(this.y);
    }
}
