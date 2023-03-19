
console.log('connected');

let professors=[];
let professorContainer = document.getElementById('professors');

function add(){
    let name = document.getElementById('name').value;
    let department = document.getElementById('department').value;
    let email = document.getElementById('email').value;

    console.log(name);
    console.log(department);
    console.log(email);

    let countEmail = professors.filter((professor)=>{
        return professor.email == email;
    })

    let tempUser={
        name: name,
        department: department,
        email: email,
    }

    console.log(professors);


    professorContainer.innerHTML = '';
    professors.map((professor)=>{
        let professorDiv = document.createElement('div');
        let nameContainer = document.createElement('p');
        let departmentContainer = document.createElement('p');
        let emailContainer = document.createElement('p');

        professorDiv.classList.add('professor');
        nameContainer.classList.add('name');
        departmentContainer.classList.add('department');
        emailContainer.classList.add('email');

        nameContainer.innerText = professor.name;
        departmentContainer.innerText = professor.department;
        emailContainer.innerText = professor.email;

        professorContainer.appendChild(professorDiv);
        professorDiv.appendChild(nameContainer);
        professorDiv.appendChild(departmentContainer);
        professorDiv.appendChild(emailContainer);
    })
}