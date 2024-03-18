// //A visitor enters the website and finds 
// a list of available freelancers. Each 
// freelancer has a name, an occupation, and 
//  starting price for their services. They observe on the list Alice, the writer with a starting price of $30,
//  and Bob, who is a teacher, has a starting 
//  price of $50.

//The first 2 names, jobs, and prices are populated in the table already.

// The visitor also finds a message that displays the average starting price of all the freelancers. 
// In this example, the average starting price is $40.

//CREATE a function here that calculates the average starting price.
//funtion should update as new values are received.


//Enure that the new average prices is listed at $50.

const freeLancerData = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 40 },
    { name: "Carol", occupation: "Programmer", price: 70 },
    { name: "David", occupation: "Engineer", price: 60 },
    { name: "Eva", occupation: "Artist", price: 50 },
    { name: "Frank", occupation: "Chef", price: 45 },
    { name: "Grace", occupation: "Doctor", price: 90 },
    { name: "Henry", occupation: "Musician", price: 55 },
    { name: "Ivy", occupation: "Designer", price: 65 },
    { name: "Jack", occupation: "Consultant", price: 80 },
    { name: "Kate", occupation: "Writer", price: 35 },
    { name: "Liam", occupation: "Teacher", price: 45 },
    { name: "Mia", occupation: "Programmer", price: 75 },
    { name: "Noah", occupation: "Engineer", price: 70 },
    { name: "Olivia", occupation: "Artist", price: 55 },
    { name: "Peter", occupation: "Chef", price: 40 },
    { name: "Quinn", occupation: "Doctor", price: 95 },
    { name: "Ryan", occupation: "Musician", price: 60 },
    { name: "Sofia", occupation: "Designer", price: 70 },
    { name: "You Broke", occupation: "Our Website", price: 1000000 }
]

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
// const addFreeLancerIntervalId = setInterval(addFreeLancer, 2000);

// render(); // We call this function once to render the initial state???

//CREATE a function here that populates the table with new freelancers every few seconds.
//A new listing appears for Carol, Programmer, $70.

// function addFreeLancer() {
//     const tableBody = document.querySelector("table tbody");
//     freeLancerData.forEach((item, index) => {
//         setTimeout(() => {
//             const row = tableBody.insertRow(-1);
//             const nameCell = row.insertCell(0)
//             const occupationCell = row.incertCell(1);
//             const priceCell = row.insertCell(2);

//             nameCell.textContent = item.name;
//             occupationCell.textContent = item.occupation;
//             priceCell.textContent = item.price;
//         }, index * 2000);
//     });
// }

// addFreeLancer();


// This is a second attempt at populating info into the main section and not a table.
function addFreeLancerToMain() {
    const mainSection = document.querySelector("main");
    const footer = document.querySelector("footer")
    let totalCost = 0;

    freeLancerData.forEach((item, index) => {
        setTimeout(() => {
            const newEntry = document.createElement("p");
            newEntry.textContent = `${item.name} - ${item.occupation}, ${item.price}`;
            mainSection.appendChild(newEntry);

            totalCost += item.price;
            const averageCost = totalCost / (index + 1);
            footer.textContent = `The average cost of our current Freelancers is $${averageCost.toFixed(2)}`;
        }, index * 1000);
    });
}

// Call the function to add freelancers to the main section
addFreeLancerToMain();