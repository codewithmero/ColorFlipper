const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const changeButton = document.querySelector("a.change-button");
const colorString = document.querySelector(".color-string");

changeButton.addEventListener('click', () => {
  console.log('clicked!');  
  const rString = Math.floor(Math.random() * 255);
  const gString = Math.floor(Math.random() * 255);
  const bString = Math.floor(Math.random() * 255);
  const rgbstring = `rgb(${rString}, ${gString}, ${bString})`;
  const hexString = rgbToHex(rgbstring);
  document.body.style.backgroundColor = hexString;
  colorString.style.color = getContrastYIQ(hexString);
  colorString.textContent = hexString;
}); 

// function to convert RGB string into a Hex string;
function rgbToHex(hexString) {
  let a = hexString.split("(")[1].split(")")[0];
  a = a.split(",");
  
  let b = a.map(function(x){             //For each array element
    x = parseInt(x).toString(16);      //Convert to a base16 string
    return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
  });

  return "#"+b.join("");
}

// function to get contrast;
function getContrastYIQ(hexcolor){
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substr(0,2),16);
  var g = parseInt(hexcolor.substr(2,2),16);
  var b = parseInt(hexcolor.substr(4,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? 'black' : 'white';
}