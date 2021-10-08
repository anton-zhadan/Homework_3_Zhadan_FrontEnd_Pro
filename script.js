// userName = prompt(`Enter name`);
// userName = userName ? userName.trim() : 'not valid';
// console.log(userName);

// email = prompt ('Enter email');

// if (email.startsWith(`@`)) {
//     email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
// } else if (email.endsWith(`@`)) {
//     email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
// } else if (!email.includes(`@`)) {
//     email = `not valid email <b>${email}</b> (symbol @ not exist)`;
// }

// console.log (email);

DOB = prompt(`Enter year`);
age = '';

if (!isNaN(DOB)) {
    age = new Date().getFullYear()-DOB; 
}

console.log (age);

document.write (`<li>Age: <b>${age}</b></li>`)