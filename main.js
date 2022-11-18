const months = ["January","February", "March", "April","May","June","July","August","September","October","November","December",
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date()
let lastDate = new Date(
  date.getFullYear(),
  date.getMonth()+1,
  0
).getDate()

let cells = ""
for(let i=1;i<=lastDate;i++){
  cells += "<div>" + i + "</div>"
}

document.getElementsByClassName("calander-container")[0].innerHTML = cells