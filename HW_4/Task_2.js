class Student {
    constructor (fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }
    get direction() {
        return this._direction;
    }

    set direction(value) {
        this._direction = value;
    }

    showFullName() {
        return this._fullName;
    }

    nameIncludes(data) {
        const fullName = this.showFullName();
        if (fullName.toLowerCase().includes(data.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    }

    static studentBuilder() {
        const newStudent = new Student("Ihor Kohut", "qc");
        return newStudent;
    }
}

const stud1 = new Student("Ivan Petrenko", "web");
console.log(stud1.nameIncludes('Ivan'));
console.log(stud1.nameIncludes('Denysenko'));

const stud2 = new Student("Sergiy Koval", "python");
console.log(stud2.nameIncludes('Jack'));
console.log(stud2.nameIncludes('giy'));

const ihor = Student.studentBuilder();
console.log(ihor);