const Header = require('./generateheader')
const Footer = require('./generatefooter')

let generateHTML = function(data) {
    let finalString = ""
    finalString = finalString + Header()
    for(i = 0; i < data.length; i ++) {
        let employeeType = data[i].getRole();
        switch(employeeType) {
            case "Engineer" : 
                finalString = finalString + generateEngineerHtml(data[i])
                break;
            case "Manager" : 
                finalString = finalString + generateManagerHtml(data[i])
                break;

            case "Intern" : 
                finalString = finalString + generateInterHtml(data[i])
                break;

        }
    }
    finalString = finalString + Footer()
    console.log(finalString)
    return finalString;
}

function generateEngineerHtml(engineer){
    return `
    <div id="employee-container">
    <div id="employee-header">
      <h2>Engineer</h2>
      <h3>${engineer.getName()} </h3>
    </div>
    <div class="info-container">
      <span class="info-label">Email:</span>
      <span class="info-value">${engineer.getEmail()}</span>
    </div>
    <div class="info-container">
      <span class="info-label">ID:</span>
      <span class="info-value">${engineer.getId()}</span>
    </div>
    <div class="info-container">
      <span class="info-label">Github::</span>
      <span class="info-value">${engineer.getGithub()}</span>
    </div>
    `
}

function generateManagerHtml(manager){
    return `
    <div id="employee-container">
    <div id="employee-header">
      <h2>Manager</h2>
      <h3>${manager.getName()}</h3>
    </div>
    <div class="info-container">
      <span class="info-label">Email:</span>
      <span class="info-value">${manager.getEmail()}</span>
    </div>
    <div class="info-container">
      <span class="info-label">ID:</span>
      <span class="info-value">${manager.getId()}</span>
    </div>
    <div class="info-container">
      <span class="info-label">Office Number:</span>
      <span class="info-value">${manager.getOfficeNumber()}</span>
    </div>
    `
}

function generateInterHtml(intern){
    return `
    <div id="employee-container">
    <div id="employee-header">
      <h2>Intern</h2>
      <h3>${intern.getName()} </h3>
    </div>
    <div class="info-container">
      <span class="info-label">Email:</span>
      <span class="info-value">${intern.getEmail()}</span>
    </div>
    <div class="info-container">
      <span class="info-label">ID:</span>
      <span class="info-value">${intern.getId()}</span>
    </div>
    <div class="info-container">
      <span class="info-label">School:</span>
      <span class="info-value">${intern.getSchool()}</span>
    </div>
    `
}

module.exports = generateHTML