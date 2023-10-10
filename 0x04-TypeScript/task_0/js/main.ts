interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const studentOne: Student = {
    firstName: 'Julian',
    lastName: 'Salva',
    age: 28,
    location: 'France',
};

const studentTwo: Student = {
    firstName: 'Motaz',
    lastName: 'Hassan',
    age: 20,
    location: 'Unknown',
};

const studnetList: Array<Student> = [studentOne, studentTwo];
const table: HTMLTableCaptionElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const ce1: HTMLTableHeaderCellElement = row.insertCell(0);
const ce2: HTMLTableHeaderCellElement = row.insertCell(1);

ce1.innerHTML = '<b>First Name</b>';
ce2.innerHTML = '<b>Location</b>';

const body: HTMLTableSectionElement = table.createTBody();

studnetList.map((student) => {
    const row: HTMLTableRowElement = body.insertRow();
    const firstNameRow: HTMLTableCellElement = row.insertCell();
    const locationRow: HTMLTableCellElement = row.insertCell();
    firstNameRow.innerHTML = student.firstName;
    locationRow.innerHTML = student.location;
})