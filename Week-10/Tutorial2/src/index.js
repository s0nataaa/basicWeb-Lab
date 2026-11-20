// Buka tab "Console" di CodeSandbox untuk melihat hasilnya.
// Tiap bagian dibungkus { } supaya nama variabel tidak bentrok.
var numbers = [3, 56, 2, 48, 5];

// ===================== MAP =====================
// Map - Create a new array by doing something with each item in an array
{
  // Langkah 3: function terpisah + map
  function double(x) {
    return x * 2;
  }
  const newNumbers = numbers.map(double);
  console.log("map (function double):", newNumbers); // [6, 112, 4, 96, 10]
}
{
  // Langkah 4: forEach (lebih panjang)
  var newNumbers = [];
  function double(x) {
    newNumbers.push(x * 2);
  }
  numbers.forEach(double);
  console.log("forEach (function double):", newNumbers);
}
{
  // Langkah 5: forEach + anonymous function
  var newNumbers = [];
  numbers.forEach(function (x) {
    newNumbers.push(x * 2);
  });
  console.log("forEach (anonymous):", newNumbers);
}
{
  // Langkah 6: map + anonymous function
  const newNumbers = numbers.map(function (x) {
    return x * 2;
  });
  console.log("map (anonymous):", newNumbers);
}

// ===================== FILTER =====================
// Filter - Create a new array by keeping the items that return true
{
  const newNumbers = numbers.filter(function (num) {
    return num < 10;
  });
  console.log("filter:", newNumbers); // [3, 2, 5]
}
{
  // versi forEach
  var newNumbers = [];
  numbers.forEach(function (num) {
    if (num < 10) {
      newNumbers.push(num);
    }
  });
  console.log("filter (forEach):", newNumbers);
}

// ===================== REDUCE =====================
// Reduce - Accumulate a value by doing something to each item in an array
{
  const newNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
  });
  console.log("reduce:", newNumber); // 114
}
{
  // versi forEach
  var newNumber = 0;
  numbers.forEach(function (currentNumber) {
    newNumber += currentNumber;
  });
  console.log("reduce (forEach):", newNumber);
}
{
  // Langkah 3: console.log untuk melihat accumulator & currentNumber tiap iterasi
  const newNumber = numbers.reduce(function (accumulator, currentNumber) {
    console.log("accumulator: " + accumulator);
    console.log("currentNumber: " + currentNumber);
    return accumulator + currentNumber;
  });
  console.log("reduce (dengan log):", newNumber);
}

// ===================== FIND =====================
// Find - Find the first item that matches from an array
{
  const newNumber = numbers.find(function (num) {
    return num < 10;
  });
  console.log("find:", newNumber); // 3
}

// ===================== FINDINDEX =====================
// FindIndex - Find the index of the first item that matches
{
  const newNumber = numbers.findIndex(function (num) {
    return num < 10;
  });
  console.log("findIndex:", newNumber); // 0
}

// ===================== ARROW FUNCTION =====================
{
  // 1. function biasa
  function square(x) {
    return x * x;
  }
  console.log("square (function):", numbers.map(square));
}
{
  // 2. anonymous function
  const newNumbers = numbers.map(function (x) {
    return x * x;
  });
  console.log("square (anonymous):", newNumbers);
}
{
  // 3. arrow function: hilangkan keyword function, tambahkan =>
  const newNumbers = numbers.map((x) => {
    return x * x;
  });
  console.log("square (arrow):", newNumbers);
}
{
  // 4. satu statement return -> hilangkan { } dan return;
  //    satu argument -> kurung boleh dihilangkan
  const newNumbers = numbers.map((x) => x * x);
  console.log("square (arrow singkat):", newNumbers); // [9, 3136, 4, 2304, 25]
}

// import { createRoot } from "react-dom/client";
// // Since React 18.0.0 (March 29, 2022),
// // we use createRoot instead of ReactDOM.render()
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<div></div>);
