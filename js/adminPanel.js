
const TABLE_HEADER = `
<tr class="header">
    <th>Login</th>
    <th>Password</th>
    <th>Email</th>
    <th></th>
</tr>
`;

function formatToTrow(userObject) {
    return `
    <tr>
        <td>${userObject['login']}</td>
        <td>${userObject['password']}</td>
        <td>${userObject['email']}</td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="edit-btn btn btn-secondary">Edit</button>
            <button type="button" class="delete-btn btn btn-secondary">Delete</button>
        </div>
    </td>
    </tr>
    `
}

function isUser(user) {
    return  user.hasOwnProperty('login') &&
            user.hasOwnProperty('password') &&
            user.hasOwnProperty('email')
}

function listUsers() {
    $('#usersList').html('');
    $('#usersList').append(TABLE_HEADER);

    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === "basket") {
            continue
        }
        let user = JSON.parse(localStorage.getItem(key))

        if (!isUser(user)) {
            continue
        }

        $('#usersList').append(
            formatToTrow(user)
        );
        
    }
}

function deleteUserByLogin(login) {
    localStorage.removeItem(login)
}

function getUserByLogin(login) {
    return JSON.parse(localStorage.getItem(login))
}

function updateUser(user) {
    localStorage.setItem(user['login'], JSON.stringify(user))
}

function createUserForm(user) {
    const userForm = `
    <div class="overlay pt-5 userForm">
        <div class="card w-25 mx-auto">
        <div class="card-body">
            <form id="updateUserForm">
                <button type="button" class="btn-close btn-form-close" aria-label="Close"></button>
                <h2 id="userLogin" class="fs-5 mb-3">User login: ${user['login']}</h2>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="text" class="form-control" id="userPassword" placeholder="${user['password']}">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" id="userEmail" placeholder="${user['email']}">
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
                    "login": `${login}`,
                    "password": `${$('#userPassword').val()}`,
                    "email": `${$('#userEmail').val()}`
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

    // going to main page
    $('.adminPanel button.btn-close').click(function (e) { 
        e.preventDefault();
        window.location.href = './index.html'
    });
});