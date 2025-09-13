interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Mark",
    lastName: "Cruise",
    age: 25,
    location: "Abuja"
};

const student2: Student = {
    firstName: "Abike",
    lastName: "Ikechukwu",
    age: 30,
    location: "Lagos"
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "60%";
  table.style.border = "1px solid black"; // border for the outer table

  const headerRow = document.createElement("tr");
  const thName = document.createElement("th");
  thName.textContent = "First Name";
  const thLocation = document.createElement("th");
  thLocation.textContent = "Location";

  // give borders to header cells
  [thName, thLocation].forEach((th) => {
    th.style.border = "1px solid black";
    th.style.padding = "8px";
  });

  headerRow.appendChild(thName);
  headerRow.appendChild(thLocation);
  table.appendChild(headerRow);

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = student.firstName;

    const tdLocation = document.createElement("td");
    tdLocation.textContent = student.location;

    // give borders to data cells
    [tdName, tdLocation].forEach((td) => {
      td.style.border = "1px solid black";
      td.style.padding = "8px";
    });

    row.appendChild(tdName);
    row.appendChild(tdLocation);
    table.appendChild(row);
  });

  document.body.appendChild(table);
});
