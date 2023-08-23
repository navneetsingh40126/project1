//Sign In
document.getElementById("btn1").addEventListener("click", (e) => {
    e.preventDefault()

    // const user_name = document.getElementById("name").style.display ="none"
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    // const user_dob = document.getElementById("dob").style.display = "none"
    
    const url = 'http://localhost:8080/users'
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , url,true)

    xhr.onreadystatechange = () =>
    {
        if(xhr.status == 200 && xhr.readyState ==4)
        {
           const response = JSON.parse(xhr.responseText);
           console.log(response)
        
            for(let i=0;i<response.length;i++)
            {
                const uemail = response[i].email;
                const upwd = response[i].password;
                if(email==uemail && password==upwd)
                {
                    window.location.href = "http://localhost:5500/final.html";
                    break;
                }
            }
        }
    }
    xhr.send()
  })