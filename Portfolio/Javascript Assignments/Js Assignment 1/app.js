//Javascript Assignment 1
// Chapter # 1.1
alert("Welcome to our website");
// Chapter # 1.2
alert("Error! Please enter a valid password");
// Chapter # 1.3
alert("Welcome to Js Land...\nHappy Coding!");
// Chapter # 1.4
alert("Welcome to Js Land...");
alert("Happy Coding!");
// Chapter # 1.5
var webDisplay ="Hello.. i can run JS through my web browser's console";
alert(webDisplay);
console.log (webDisplay);

// Chapter # 2.1
var username;
// Chapter # 2.2
var myName = "Muhammad Arsalan";
// Chapter # 2.3 (a)
// reflect on index.html file
// Chapter # 2.3 (b)
var message;
var message = "Hello World";
// Chapter # 2.3 (c)
alert(message);
// Chapter # 2.4
var studentName ="Jhone Doe";
var studentAge = "15 years old";
var studentQualification = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentQualification);
// Chapter # 2.5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
// Chapter # 2.6
var email = "arsalyousuf1@gmail.com"
alert("My email address is "+ email);
// Chapter # 2.7
var book ="A smarter way to learn JavaScript"
alert ("I am trying to learn from book " + book);
// Chapter # 2.8
document.write("Yah! I can write HTML content through JavaScript")
// Chapter # 2.9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
// Chapter # 3.1
var age = "30";
alert ("I am "+age+" years old")
// Chapter # 3.2
var N = 14;
alert ("You have visited this site "+age+" times");
// Chapter # 3.3
var birthYear = 1991;
document.write("My Birth year is "+birthYear);
// Chapter # 3.4
var visitorName = <h1>John Doe</h1>;
var ProductTitle = <h1>T-shirt</h1>;
var Quantity = <h1>5</h1>;
document.write(visitorName+' '+Quantity+' '+ProductTitle+'(s) on XYZ Clothing store');

// Chapter # 4.1
var myName = Arsalan , myFatherName = Yousuf, myQualification = Certified;
// Chapter # 4.2
// Legal Variable Name
myName;
myFatherName;
myQualification;
visitorName;
ProductTitle;
//Illegal Variable Name
// var;
// class;
// let;
// Chapter # 4.3
<h1>“Rules for naming JS variables”</h1>;

// Chapter # 5.1
var obtainMarks = 3;
var totalMarks = 5;
document.write("sum of "+obtainMarks+" and "+totalMarks+" is "+obtainMarks+totalMarks);
// Chapter # 5.2
document.write("sum of "+obtainMarks+" and "+totalMarks+" is "+totalMarks-obtainMarks);
// Chapter # 5.4
var ticketRequired = 5;
var ticketPrice = 600;
document.write("Total cost to buy "+ticketRequired+" tickets to a movie is "+ticketRequired*ticketPrice);
// Chapter # 5.6
var num =1;
var oC = (num-32)*5/9;
document.write(oC+"oC is "+num+" oF");
// Chapter # 5.7
var PriceOfItem1 = 650;
var PriceOfItem2 = 100;
var OrderedQuantityOfItem1 = 1;
var OrderedQuantityOfItem2 = 2;
var shippingCharges = 100;
document.write(<h1>Shopping Cart</h1>);
document.write('Price of item 1 is '+PriceOfItem1);
document.write('Quantity of item 1 is '+OrderedQuantityOfItem1);
document.write('Price of item 2 is '+PriceOfItem2);
document.write('Quantity of item 2 is '+OrderedQuantityOfItem2);
document.write('Shipping charges '+shippingCharges);
document.write('Total cost of your order is '+OrderedQuantityOfItem1*PriceOfItem1+OrderedQuantityOfItem2*PriceOfItem2+shippingCharges);
// Chapter # 5.8
var studentObtain = 804;
var studentRequired = 980;
document.write(<h1>Marks Sheet</h1>);
document.write("Total Marks: "+studentObtain);
document.write("Marks Obtained: "+studentRequired);
document.write("Percentage "+obtainMarks/totalMarks*100+"%");
// Chapter # 5.9
var dollartoPkr = 104.8;
var dirhamtoPkr = 28;
var dollarNote = 10;
var dihamNote = 25;
document.write(<h1>Currency In PKR</h1>);
document.write("Total Currency in PKR: "+dollarNote*dollartoPkr+dirhamtoPkr*dihamNote);
// Chapter # 5.10
var initialNum = 10
document.write(((initialNum+5)*10)/2);
// Chapter # 5.11
var currentYear = 2023;
var birthYear = 1991;
document.write(<h1>Age Calculator</h1>);
document.write("Current Year; "+currentYear);
document.write("Birth Year; "+birthYear);
document.write("Your age is: "+(currentYear-birthYear));
// Chapter # 5.13
var favoriteSnack = "Masala Chips";
var recentAge = 15;
var maximumAge = 65;
var amountOfSnackPerDay = 3;
document.write(<h1>The Lifetime Supply Calculator</h1>);
document.write("favorite snack: "+ favoriteSnack);
document.write("Estimated maximum age: "+maximumAge);
document.write("Amount of snacks per day: "+amountOfSnackPerDay);
document.write("You will need "((maximumAge-recentAge)*amountOfSnackPerDay)+favoriteSnack+" to last you until the ripe old age of "+maximumAge);
