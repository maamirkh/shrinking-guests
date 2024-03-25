#! usr/bin/env node
let guests: string[] = ["Ahmed Ebrahim", "Danish Anwer", "Fahim Saleem",
 "Sufyan Liaquat",];
 console.log("Great news! I found a bigger dinner table!");
 // Adding more guests
 guests.unshift("Zeeshan Kamal");
 guests.splice(guests.length / 2,0, "Waqar Ansari");
 guests.push("Amin Khan");
 guests.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me for dinner? `);
 })
 console.log("Unfortunately, I can only invite two people for dinner.");

 while (guests.length > 2) {
     let removedGuest = guests.pop();
     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
 }
 
 guests.forEach(guest => {
     console.log(`Dear ${guest}, you're still invited to dinner.`);
 });
 