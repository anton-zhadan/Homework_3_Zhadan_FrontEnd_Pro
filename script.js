userName = prompt(`Enter name`);
userName = userName ? userName.trim() : 'not valid';
console.log(userName);

email = prompt ('Enter email').trim().toLowerCase();

if (email.startsWith(`@`)) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.endsWith(`@`)) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
} else if (!email.includes(`@`)) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
}

console.log (email);

DOB = prompt(`Enter year`);  //DOB - day of birthday
age = '';

if (!isNaN(DOB)) {
    age = new Date().getFullYear() - DOB; 
}

console.log (age);

document.write (`<li>Full name: <b>${userName}</b></li> <li>Email: ${email}</li> <li>Age: <b>${age}</b></li>`);