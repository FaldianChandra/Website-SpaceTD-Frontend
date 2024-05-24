const form = document.getElementById('submit')

form.addEventListener('click',e => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const gender = document.getElementById('gender').value
    const emails = document.getElementById('Email').value
    const dob = document.getElementById('dob').value
    const pw = document.getElementById('pw').value
    const ctr = document.getElementById('ctr').value

    if(name.length < 4 || name.length > 20){
        alert("Error")
        return false
    }
    if(!emails.includes("@") || !emails.split("@")[1].includes(".")){
        alert("email Error")
        return false
    }
    const day= dob.split("-")[0]
    const month= dob.split("-")[1]
    const year= dob.split("-")[2]

    if(!(day > 1 && day <= 31) || !(month >= 1 && month <= 12) || !(year >= 1 && year <= 9999)){
        alert("Not A Valid Date of Birth")
        return false
    }
    if(pw.length < 7 || pw.length > 25){
        alert("Error")
        return false
    }
    
    alert("Login Succesfully")
    window.location.reload()

})