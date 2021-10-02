//// Q No. 1////


// let cities = ['Karachi','Lahore','Islamabad','Queta']
// let [first, second, third, fourth] =  cities;
// let city1 = first;
// let city2 = second;
// let city3 = third;
// let city4 = fourth;
// console.log(city1, city2, city3, city4)

//// Q No. 2////

// let obj = {
//     name:'Marry',
//     age:20,
//     rollNo:2
// }
// let {name, age, rollNo} = obj;
// let userName = name;
// let userAge = age;
// let userRollNo = rollNo;
// console.log(userName, userAge, userRollNo);


//// Q No. 3////

// doIt = (a,b,c,d,e) => {
//     let arr = [];
//     return  console.log(arr = [a,b,c,d,e]);
// }
// doIt(1,2,3,4,5)

//// Q No. 4////

//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

// let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
// let completeNames;
// firstNames.forEach (a => 
//   lastNames.forEach(b => {
//    return console.log( completeNames = [`${a} ${b}`]);
//   })
// ) 

//// Q No. 5////

// let arr1 = +prompt("Enter a number");
// let arr2 = +prompt("Enter a number");
// let arr3 = +prompt("Enter a number");
// double = (a,b,c) => {
//     let arr =[a, b, c]
//     arr.map(i => console.log(i*2))
// }
// double(arr1,arr2,arr3);

//// Q No. 6////

// let num = +prompt("Enter a number");
// square = (a) => {
//     console.log(Math.pow(a,2));
// }
// square(num)

///// Q No. 7////


// var authenticated=true;
// authenticated ? alert('you are allowed')
// :
// alert('you are not allowed')
////// "you are allowed" will run


//// Q No. 8////

//  var age = 12;
// var canDrive= age > 18 ? alert('yes')
// :
// alert('no')

//// ans: 'no ////

//// Q No. 9////

// const dog = 'snicker'
// logdog(dog)
// function logdog(dog){
//   console.log(dog);
// }
// function go(){
//   const dog = 'sunny';
//   logdog(dog)
//   console.log(dog);
// }

//// Q No. 10////

// let text = `He's often called "Johnny"`;
// console.log(text)

//// Q No. 11////

// welcomeMsg = (name = "Everyone") => {
//     let msg = "Welcome " + name
//     console.log(msg)
// }
// welcomeMsg("Faiza") //// Welcome Faiza
// welcomeMsg() //// Welcome Everyone

//// Q No. 12////

// setTimeout(() => {
//   let age = 18;
//   const myPromise = new Promise((resolve,reject) => {
//       age == 18 ?
//      resolve('Your allowed')
//       :
//       reject('your not allowed')
//   })

//   myPromise
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
// },5000);