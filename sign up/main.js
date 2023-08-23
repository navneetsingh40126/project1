//sign up
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()

    const user_name = document.getElementById("name").value
    const user_email = document.getElementById("email").value
    const user_password = document.getElementById("password").value
    const user_dob = document.getElementById("dob").value
    
    const user=
    {
        // key(db_col_name): value(text_box_variables)
        name : user_name ,
        email: user_email,
        password: user_password,
        dob: user_dob
    }
    
    const url = 'http://localhost:8080/users'
    const xhr = new XMLHttpRequest()
    xhr.open('POST' , url)
    xhr.setRequestHeader('Access-Control-Allow-Origin' , '*')
    xhr.setRequestHeader('Content-Type' , 'application/json')
    xhr.onreadystatechange = () =>
    {
        if(xhr.status == 200 && xhr.readyState ==4)
        {
           const response = JSON.parse(xhr.responseText);
           console.log(response)
           window.location.href="http://localhost:5500/index.html"
        }
    }
    xhr.send(JSON.stringify(user))
  })