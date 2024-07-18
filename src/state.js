export const users = [
    {
        username: '',
        email: '',
        password:'',
        vPassword: '',
        phone: ''
    }
];

export let currUser = users[0];

export function signInUser(username, password){

    for(var i=0; i<users.length; i++) {
	    if(users[i].username === username && users[i].password === password) {
		    currUser= users[i];
		    return true;
	    }
        
    }
    alert('Incorrect Username or Password');
    currUser= users[0];
    return false;

}

export function updateUser(username, email, phone){
    currUser.username = username;

    currUser.email = email;

    currUser.phone = phone;

    console.log(currUser);
    
}

export function signUpUser(username, email, password, vPassword, phone, j){
    users.push({
        username : username,
    
        email : email,

        password : password,

        vPassword : vPassword,

        phone : phone
    });
    
    currUser= users[j];
    console.log(users[j-1]);
    console.log(users[1]);
}