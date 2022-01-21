const populate = () => {
    let projectImages = ["dice", "api", "youtube", "bank"];
    let links = ['https://github.com/cs-memphis-c-py-401d1cd/lab06-greed-project-demarcus_robert_spencer','https://github.com/cs-memphis-code-301d3/code301-lab8-react-node-express-robertCodedIt','https://github.com/cs-memphis-code-301d3/301-group-project-final-lizzy-jerrod-robert','https://github.com/cs-memphis-code-301d3/mern-assessment-1-robertCodedIt']
    let descriptions=['dice project using python','api project leveraging nodejs','youtube project using nodejs','bank project using react']
    let projects = document.getElementById("projects");
    for (let i = 0; i < projectImages.length; i++) {
      let images = document.createElement("img");
      images.src = `./assets/images/${projectImages[i]}.jpg`;
      images.alt = `${projectImages[i]}`;
  
      let a = document.createElement("a");
      a.appendChild(images);
      // a.innerText = `${projectImages[i]}`;
      // a.textContent = `Project Name: ${projectImages[i]} `
      // a.id = `${projectImages[i]}`;
      a.href = `${links[i]}`;
      a.target = 'blank'
      let b = document.createElement("div").appendChild(a);
      b.classList = 'blur';
      b.style.display = 'grid'
      b.style.placeItems = 'center'
      b.style.margin = '.4rem'
     
     
      c = document.createElement('p');
      c.innerText = descriptions[i];
      b.appendChild(c)
      projects.appendChild(b);
    }
  
  //   projects.style.display = 'grid';
  //   projects.style.gridTemplateRows = '1fr,1fr';
  //   projects.style.gridTemplateColumns = '1fr,1fr';
  
  
    //    assets\images\dice.jpg
  };
  const toTop = ()=>{
      mybutton = document.getElementById("top");
      
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  mybutton.addEventListener('click', topFunction)
  }
  populate();
  toTop();
  