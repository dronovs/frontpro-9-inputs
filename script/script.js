const inputFirstnameEl = document.querySelector('#input-firstname');
const inputSecondnameEl = document.querySelector('#input-secondname');
const inputUserPhone = document.querySelector('#input-phone');
const addButton = document.querySelector('#button-add');
let usersTable = document.querySelector('tbody');
console.log(inputFirstnameEl);
console.log(inputSecondnameEl);
console.log(inputUserPhone);
console.log(usersTable);

function addTableTR () {
    let tr = document.createElement('tr');
    tr.append(addUserFirstname());
    tr.append(addUserSecondName());
    tr.append(addUserPhone());
    usersTable.append(tr);

    function addUserFirstname () {
        const tdFirstname = document.createElement('td');
        tdFirstname.innerText = inputFirstnameEl.value;
        usersTable.append(tdFirstname);
        inputFirstnameEl.value = null;
        return tdFirstname;
    }

    function addUserSecondName () {
        const tdSecondName = document.createElement('td');
        tdSecondName.innerText = inputSecondnameEl.value;
        usersTable.append(tdSecondName);
        inputSecondnameEl.value = null;
        return tdSecondName;
    }

    function addUserPhone () {
        const tdPhoneNumber = document.createElement('td');
        tdPhoneNumber.innerText = inputUserPhone.value;
        usersTable.append(tdPhoneNumber);
        inputUserPhone.value = null;
        return tdPhoneNumber;
    }

}

addButton.addEventListener('click', addTableTR);
