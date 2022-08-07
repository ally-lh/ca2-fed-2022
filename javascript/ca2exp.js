
// --------javascript code for cards start ------
const Short = ["DCITP", "DAAA", "DIT", "DISM"] //array containing the course short names
const Name = ["Common ICT Programme", "Diploma in Applied Ai and Analytics", //array of course full names
    "Diploma in Information Technology",
    "Diploma in Security and Management"]
const Text = ["The DCITP is a semester long programme designed to give you a broad introduction to the Infocomm landscape and help you gain insights into the occupations and job roles, career pathways and employment opportunities in the various Infocomm sectors.", "DAAA students will learn to apply AI and big data to solve current challenges across industries such as finance, information technology and commerce.", "he DIT course is positioned to focus on Software & Applications development with three specialist tracks: Software Development, User Experience (UX) and Immersive Simulation", "DISM curriculum covers the important areas of security technology, security management, information technology, law and teamwork and communications."]
//array containing all the p tag
var cardsInfo = [Short, Name, Text]
//placing all the cards info in an array
var courseShort = document.getElementById("courseShort")
var courseName = document.getElementById("courseName")
var courseText = document.getElementById("courseText")
var cardsCurr = [courseShort, courseName, courseText] //array of the current text on the website

function appear(n) {
    for (i in cardsCurr) {
        cardsCurr[i].innerHTML = cardsInfo[i][n - 1]
    }
    /* first loop of the array: 
    courseShort will be replaced by Short[n-1], 
    second loop of the array: 
    course Name will be replaceed by Name[n-1]*/
}

// ------javascript code for cards end------------