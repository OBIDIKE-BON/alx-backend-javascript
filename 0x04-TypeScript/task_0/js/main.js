// Write an interface named Student that accepts the following elements: 
// firstName(string),
// lastName(string),
// age(number), and
// location(string)
// Create two students, student1 and student2, and assign them the following values:
// student1: firstName: "John", lastName: "Doe", age: 24, location: "San Francisco"
// student2: firstName: "Jane", lastName: "Doe", age: 24, location: "San Francisco"
var student1 = {
    firstName: "John",
    lastName: "Ofor",
    age: 24,
    location: "Onitsha"
};
var student2 = {
    firstName: "Jane",
    lastName: "Mmaduka",
    age: 24,
    location: "Aba"
};
// Create an array named studentsList and assign it the two students, student1 and student2.
var studentsList = [student1, student2];
// Using Vanilla Javascript,
// render a table
// for each elements in the array,
// append a new row to the table
// Each row should contain the first name of the student and the location
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
th1.textContent = 'First Name';
th2.textContent = 'Location';
tr.appendChild(th1);
tr.appendChild(th2);
thead.appendChild(tr);
table.appendChild(thead);
studentsList.forEach(function (student) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.textContent = student.firstName;
    td2.textContent = student.location;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);
