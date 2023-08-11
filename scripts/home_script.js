const alert_div = document.getElementById("alert")
const alert_button = document.getElementById("close-button")
const projects_div = document.getElementById("projects")
const project_json = {name: "LOGIN", href: "login.html", backgroundimg: "img/login_image.png", tecnologiesimg: ["img/python_ico.png", "img/javascript_ico.png", "img/html_ico.png", "img/css_ico.png", "img/git_ico.png"]}

//function to hide allert

function hide_alert(){
    alert_div.classList.add('hiden')
}




//making a project div

function make_Project(project){
    const div_project = document.createElement("div")
    const background_img = document.createElement("img")
    const div_icons = document.createElement("div")
    const a = document.createElement("a")
    
    div_project.id = "project"
    div_icons.id = "icon-tecnologies"

    background_img.id = "project-img"
    background_img.src = "../frontend_portifolio/"+project["backgroundimg"]

    a.href = "../frontend_portifolio/"+project["href"]

    for(i in project["tecnologiesimg"]){
        const img = document.createElement("img")
        img.src = "../"+project["tecnologiesimg"][i]
        div_icons.appendChild(img)
    }
    div_project.appendChild(background_img)
    div_project.appendChild(div_icons)
    a.appendChild(div_project)

    projects_div.appendChild(a)
}

//making a request for projects

function load_projects(){
    fetch("https://apiportifolio-raphaelmenezesvill.b4a.run/home", {method: "POST",
                                         headers: {"Content-Type": "application/json"},
                                         body: JSON.stringify({"email": "visitant"})})
    .then((resp) => resp.json())
    .then((data) => {for(i in data){make_Project(data[i])}})
    .catch((err) => console.log("Deu erro filhão" + err))
}

load_projects()

//making a button event

alert_button.addEventListener("click",hide_alert)