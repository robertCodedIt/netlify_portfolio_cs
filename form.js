(()=>{
    let gForm = document.createElement('iframe');
    gForm.src = "https://docs.google.com/forms/d/e/1FAIpQLSdojuF5FMVwG4IOF5dKKGDOrJ98k3mZ5YOdtWkeyxPh-uqagw/viewform?embedded=true";
    gForm.style.width="640px"
    gForm.style.height="1250px" 
    gForm.style.frameBorder="0"
    gForm.style.marginHeight="0"
    gForm.style.marginWidth="0"
    let g = document.querySelector('.gForm')    
    g.appendChild(gForm)
})()