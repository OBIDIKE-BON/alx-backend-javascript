// Write an interface named Student that accepts the following elements: 
// firstName(string),
// lastName(string),
// age(number), and
// location(string)

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students, student1 and student2, and assign them the following values:
// student1: firstName: "John", lastName: "Doe", age: 24, location: "San Francisco"
// student2: firstName: "Jane", lastName: "Doe", age: 24, location: "San Francisco"

const student1: Student = {
    firstName: "John",
    lastName: "Ofor",
    age: 24,
    location: "Onitsha"
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Mmaduka",
    age: 24,
    location: "Aba"
}

// Create an array named studentsList and assign it the two students, student1 and student2.

const studentsList: Student[] = [student1, student2];

// Using Vanilla Javascript,
// render a table
// for each elements in the array,
// append a new row to the table
// Each row should contain the first name of the student and the location

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
th1.textContent = 'First Name';
th2.textContent = 'Location';
tr.appendChild(th1);
tr.appendChild(th2);
thead.appendChild(tr);
table.appendChild(thead);
studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = student.firstName;
    td2.textContent = student.location;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);
