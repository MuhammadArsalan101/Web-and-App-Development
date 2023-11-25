// <<<<<<<<<<<<<<<< Capter 5-11 >>>>>>>>>>>>>>>>
// Chapter # 5.1
// var obtainMarks = 3;
// var totalMarks = 5;
// document.write("sum of "+obtainMarks+" and "+totalMarks+" is "+obtainMarks+totalMarks);
// Chapter # 5.2
// document.write("sum of "+obtainMarks+" and "+totalMarks+" is "+totalMarks-obtainMarks);
// Chapter # 5.4
// var ticketRequired = 5;
// var ticketPrice = 600;
// document.write("Total cost to buy "+ticketRequired+" tickets to a movie is "+ticketRequired*ticketPrice);
// Chapter # 5.6
// var num =1;
// var oC = (num-32)*5/9;
// document.write(oC+"oC is "+num+" oF");
// Chapter # 5.7
// var PriceOfItem1 = 650;
// var PriceOfItem2 = 100;
// var OrderedQuantityOfItem1 = 1;
// var OrderedQuantityOfItem2 = 2;
// var shippingCharges = 100;
// document.write(<h1>Shopping Cart</h1>);
// document.write('Price of item 1 is '+PriceOfItem1);
// document.write('Quantity of item 1 is '+OrderedQuantityOfItem1);
// document.write('Price of item 2 is '+PriceOfItem2);
// document.write('Quantity of item 2 is '+OrderedQuantityOfItem2);
// document.write('Shipping charges '+shippingCharges);
// document.write('Total cost of your order is '+OrderedQuantityOfItem1*PriceOfItem1+OrderedQuantityOfItem2*PriceOfItem2+shippingCharges);
// Chapter # 5.8
// var studentObtain = 804;
// var studentRequired = 980;
// document.write(<h1>Marks Sheet</h1>);
// document.write("Total Marks: "+studentObtain);
// document.write("Marks Obtained: "+studentRequired);
// document.write("Percentage "+obtainMarks/totalMarks*100+"%");
// Chapter # 5.9
// var dollartoPkr = 104.8;
// var dirhamtoPkr = 28;
// var dollarNote = 10;
// var dihamNote = 25;
// document.write(<h1>Currency In PKR</h1>);
// document.write("Total Currency in PKR: "+dollarNote*dollartoPkr+dirhamtoPkr*dihamNote);
// Chapter # 5.10
// var initialNum = 10
// document.write(((initialNum+5)*10)/2);
// Chapter # 5.11
// var currentYear = 2023;
// var birthYear = 1991;
// document.write(<h1>Age Calculator</h1>);
// document.write("Current Year; "+currentYear);
// document.write("Birth Year; "+birthYear);
// document.write("Your age is: "+(currentYear-birthYear));
// Chapter # 5.13
// var favoriteSnack = "Masala Chips";
// var recentAge = 15;
// var maximumAge = 65;
// var amountOfSnackPerDay = 3;
// document.write(<h1>The Lifetime Supply Calculator</h1>);
// document.write("favorite snack: "+ favoriteSnack);
// document.write("Estimated maximum age: "+maximumAge);
// document.write("Amount of snacks per day: "+amountOfSnackPerDay);
// document.write("You will need "((maximumAge-recentAge)*amountOfSnackPerDay)+favoriteSnack+" to last you until the ripe old age of "+maximumAge);

// Chapter # 6///

// Chapter # 6.1
// var a = 10;
// console.log("The value of a is: "+a );

// var a = ++a
// console.log("The value of ++a is: " +a);
// console.log("Now the value of a is: "+a );
// console.log("The value of a++ is: "+ a++ );
// console.log("Now the value of a is: "+ a );

// var a = --a
// console.log("The value of --a is: " +a);
// console.log("Now the value of a is: "+a );
// console.log("The value of a-- is: "+ a-- );
// console.log("Now the value of a is: "+ a );

// Chapter # 6.2
// var a = 2, b = 1;
// var result = --a;
// console.log(a);//Pre_decreament
// console.log(b);1
// console.log(result);//PreDecrementInA1

// var result =  --a - --b ;
// console.log(a);//1
// console.log(b);//Pre_decreament0
// console.log(result);//1-0=1

// var result =  --a - --b + ++b;
// console.log(a);//1
// console.log(b);//Pre_decreamentAndIncrement1
// console.log(result);//1-0+1=0

// var result =  --a - --b + ++b + b--;
// console.log(a);//1
// console.log(b);//Pre_decreamentAndConcetenatWithIncrement
// console.log(result);//Pre_decreamentAndConcetenatWithIncrement

// Chapter # 6.3
// var UserName=prompt("Enter your Full Name");
// console.log("Welcome Mr./Mrs. "+ UserName);

// Chapter # 6.4 & 6.5
// var Table = prompt("Enter a Number",5)
// console.log(Table + " x 1 = "+ Table*1);
// console.log(Table + " x 2 = "+ Table*2);
// console.log(Table + " x 3 = "+ Table*3);
// console.log(Table + " x 4 = "+ Table*4);
// console.log(Table + " x 5 = "+ Table*5);
// console.log(Table + " x 6 = "+ Table*6);
// console.log(Table + " x 7 = "+ Table*7);
// console.log(Table + " x 8 = "+ Table*8);
// console.log(Table + " x 9 = "+ Table*9);
// console.log(Table + " x 10 = "+ Table*10);

// Chapter # 6.6
var SubjectName1=prompt("Enter First Subject Name","English");
var SubjectName2=prompt("Enter Second Subject Name","Maths");
var SubjectName3=prompt("Enter Third Subject Name","Biology");
var TotalMarks = 100;
var obtainedMarksSubject1= prompt("Enter obtained marks of "+SubjectName1,50);
var obtainedMarksSubject2= prompt("Enter obtained marks of "+SubjectName2,60);
var obtainedMarksSubject3= prompt("Enter obtained marks of "+SubjectName3,70);
var totalObtained=obtainedMarksSubject3+obtainedMarksSubject2+obtainedMarksSubject1;
var totalPercentage=(totalObtained/(TotalMarks*3)*100)
document.write("<h3>Subject Name   "+" Total Marks   "+" Obtained Marks   "+" Percentage </h3>");
document.write("</br>"+SubjectName2+"      "+TotalMarks+"      "+obtainedMarksSubject2+"      "+(obtainedMarksSubject2/TotalMarks)*100+"%");
document.write("</br>"+SubjectName1+"      "+TotalMarks+"      "+obtainedMarksSubject1+"      "+(obtainedMarksSubject1/TotalMarks)*100+"%");
document.write("</br>"+SubjectName3+"      "+TotalMarks+"      "+obtainedMarksSubject3+"      "+(obtainedMarksSubject3/TotalMarks)*100+"%");
document.write("</br>"+"  _________    "+TotalMarks+" _______     "+totalObtained+" ______     "+totalPercentage+"%");