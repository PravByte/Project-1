let result = (event) => {
    event.preventDefault(); 
    let name1 = document.getElementById("name").value;  
    let name2 = document.getElementById("secondname").value;  
    let answer = document.getElementById("percent"); 
    if (name1 && name2) {  
        let percentage = Math.floor(Math.random() * 100) + 1;  
        answer.textContent = `Heart Match ${percentage}${"%"}`; 
    } else {
        answer.textContent = "Please enter both names.";  
    }
    document.getElementById("name").value = ""
    document.getElementById("secondname").value = ""
    
}

