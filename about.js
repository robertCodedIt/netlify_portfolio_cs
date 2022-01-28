(() => {
    // let projectList = document.getElementById('project-list');
      let projectImages = ["dice", "api", "youtube", "bank"];
      let projectNames = ['Farkle','Proxy Web Server', 'Youtube Clone','Bank App']
      let links = ['https://github.com/cs-memphis-c-py-401d1cd/lab06-greed-project-demarcus_robert_spencer','https://github.com/cs-memphis-code-301d3/code301-lab8-react-node-express-robertCodedIt','https://github.com/cs-memphis-code-301d3/301-group-project-final-lizzy-jerrod-robert','https://github.com/cs-memphis-code-301d3/mern-assessment-1-robertCodedIt']
      let descriptions=['Farkle Console Game using Python','Proxy Web Server leveraging NodeJS','Youtube clone using the MERN stack ','Banking App written in ReactJS']
      let projects = document.getElementById("projects-three");
      // for(let i =0;i<projectImages.length;i++){

      // }
      for (let i = 0; i < projectImages.length; i++) {
        
        let images = document.createElement("img");
        images.src = `./assets/images/${projectImages[i]}.jpg`;
        images.alt = `${projectNames[i]}`;
    
        let a = document.createElement("a");
        a.appendChild(images);
        // a.innerText = `${projectImages[i]}`;
        // a.textContent = `Project Name: ${projectImages[i]} `
        // a.id = `${projectImages[i]}`;
        a.href = `${links[i]}`;
        a.id = `${projectNames[i]}`
        a.target = 'blank'
        let b = document.createElement("div").appendChild(a);
        b.classList = 'blur';
        b.style.display = 'grid'
        b.style.placeItems = 'center'
        b.style.margin = '.4rem'
        // create project names and links in the dropdown menu
      
        c = document.createElement('p');
        c.innerText = descriptions[i];
        b.appendChild(c)
    projects.appendChild(b)}})()