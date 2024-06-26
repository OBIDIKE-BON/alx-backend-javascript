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
const studentsList: Student[] = [
    { firstName: "John", lastName: "Ofor", age: 42, location: "Onitsha" },
    { firstName: "Jane", lastName: "Mmaduka", age: 98, location: "Aba" }
];

// Create an array named studentsList and assign it the two students, student1 and student2.

// Using Vanilla Javascript,
// render a table
// for each elements in the array,
// append a new row to the table
// Each row should contain the first name of the student and the location
const table = document.createElement('table');
table.innerHTML = `
    <thead>
        <tr>
            <th>First Name</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        ${studentsList.map(student => `
            <tr>
                <td>${student.firstName}</td>
                <td>${student.location}</td>
            </tr>
        `).join('')}
    </tbody>
`;

// Append the table to the document body
document.body.appendChild(table);
