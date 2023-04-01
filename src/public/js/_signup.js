const signup = async (name,email,password) => {
     try {
        const res = await fetch("http://localhost:2500/api/v1/users",{
            method: "POST",
            body: JSON.stringify({
                name:name,
                email:email,
                password:password
            })
        })
     console.log(await res.json())
     } catch (error) {
        console.log(error)
     }
}

document.querySelector(".form").addEventListener("submit",async(e) => {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
   await signup(name,email,password)
})