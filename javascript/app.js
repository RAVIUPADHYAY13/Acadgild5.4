var employee1 = { 
	name: "Shubham", 
	age: 21,
	salary: 60000, 
	address: { 
		city: "Gurugram", 
		state: "Haryana", 
		pin: 122001 },
	}
var employee2 = { 
	name: "Akshay", 
	age: 21,
	salary: 70000, 
	address: { 
		city: "New Delhi", 
		state: "Delhi", 
		pin: 110045 },
	}

var employee3 = { 
	name: "Bhanu", 
	age: 29,
	salary: 15000, 
	address: { 
		city: "Bengaluru", 
		state: "Karnataka", 
		pin: 161015 },
	}

var employee4 = { 
	name: "Vivek", 
	age: 19,
	salary: 20000, 
	address: { 
		city: "Bhagalpur", 
		state: "Bihar", 
		pin: 177017 },
	}

var employee5 = { 
	name: "Pratik", 
	age: 26,
	salary: 82000, 
	address: { 
		city: "Panji", 
		state: "Goa", 
		pin: 209713 },
	}

var employees = [employee1, employee2, employee3, employee4, employee5];

console.log("Name: "+ employees[2]['name'] + "\nAge: "+ employees[2]['age'] +"\nSalary: " + employees[2]['salary'] + "\nCity: " + employees[2].address.city +"\nState: " + employees[2].address.state + "\nPincode: " + employees[2].address.pin);
