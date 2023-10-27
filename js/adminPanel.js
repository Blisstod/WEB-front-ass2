import { users } from "./users.js";

const adminPanelHTML = `
<section class="adminPanel">
    <div class="container">
        <div class="adminPanel__header">
            <h1>Admin panel</h1>
            <button type="button" class="btn-close" aria-label="Close"></button>
        </div>

        <table id="usersList">
        </table>
    </div>
</section>
`


function formatToTrow(userObject) {
    return `
    <tr>
        <td>${userObject['Login']}</td>
        <td>${userObject['Password']}</td>
        <td>${userObject['Name']}</td>
        <td>${userObject['Email']}</td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="edit-btn btn btn-secondary">Edit</button>
            <button type="button" class="delete-btn btn btn-secondary">Delete</button>
        </div>
    </td>
    </tr>
    `
}

function listUsers() {
    $('#usersList').html('');
    $('#usersList').append(
        `
        <tr class="header">
            <th>Login</th>
            <th>Password</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
        </tr>
        `
    );
    for (let i in users) {
        $('#usersList').append(
            formatToTrow(users[i])
        );
    }
}

function deleteUserByLogin(login) {
    for (let i in users) {
        if (users[i]['Login'] == login) {
            users.splice(i, 1); 
            return;
        }
    }
}

function getUserByLogin(login) {
    for (let i in users) {
        if (users[i]['Login'] == login) {
            return users[i];
        }
    }
}

function updateUser(user) {
    for (let i in users) {
        if (users[i]['Login'] == user['Login']) {
            users[i] = user;
            return;
        }
    }
}

function createUserForm(user) {
    const userForm = `
    <div class="overlay pt-5 userForm">
        <div class="card w-25 mx-auto">
        <div class="card-body">
            <form id="updateUserForm">
                <button type="button" class="btn-close btn-form-close" aria-label="Close"></button>
                <h2 id="userLogin" class="fs-5 mb-3">User login: ${user['Login']}</h2>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="text" class="form-control" id="userPassword" placeholder="${user['Password']}">
                </div>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" id="userName" placeholder="${user['Name']}">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" id="userEmail" placeholder="${user['Email']}">
                </div>
            
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </div>
        </div>
    </div>
    `

    $('.adminPanel').append(userForm);
    $('.btn-form-close').click(function (e) { 
        e.preventDefault();
        $('.userForm').remove();
    });
}


$(document).ready(function () {
    // turning on admin panel
    $('#admin').click(function (e) { 
        $('body').append(adminPanelHTML);
        listUsers();

        // adding event to edit delete buttons
        $('#usersList').click(function (e) { 
            // edit button
            if (e.target && e.target.classList.contains('edit-btn')) {
                let tr = e.target.parentElement.parentElement.parentElement;
                let login = tr.firstElementChild.textContent;
                let user = getUserByLogin(login);
                createUserForm(user);
                $('#updateUserForm').submit(function (e) { 
                    e.preventDefault();
                    let newUser = {
                        "Login": `${login}`,
                        "Password": `${$('#userPassword').val()}`,
                        "Name": `${$('#userName').val()}`,
                        "Email": `${$('#userEmail').val()}`
                    }

                    updateUser(newUser);
                    $('.userForm').remove();
                    listUsers();
                });
            }

            // delete button
            if (e.target && e.target.classList.contains('delete-btn')) {
                let conf = confirm('confirm the action')
                if (conf) {
                    let tr = e.target.parentElement.parentElement.parentElement;
                    let login = tr.firstElementChild.textContent;
                    deleteUserByLogin(login);
                    listUsers();
                }
            }
        });

        // removing admin panel section when clicking close button 
        $('.adminPanel button.btn-close').click(function (e) { 
            e.preventDefault();
            $('.adminPanel').remove();
        });
    });

});