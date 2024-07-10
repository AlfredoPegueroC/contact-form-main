const Name = document.getElementById("name")
const last = document.getElementById("LastName");
const Email = document.getElementById("Email")

const area = document.getElementById("area")
const check = document.getElementById("check")

const op1 = document.querySelector("#option1")
const op2 = document.querySelector("#option2")

const success = document.querySelector(".success")

const btn = document.querySelector(".btn")


const cleanForm = () =>{
    Name.value = ""
    last.value = ""
    Email.value = ""
    area.value = ""
    check.checked = false
}

btn.addEventListener("click", e => {
    e.preventDefault()

    if(Name.value && last.value && Email.value && area.value && check.checked){
        success.style.opacity = "1"

        setTimeout(() => {
            success.style.opacity = "0"
        }, 10000)
        cleanForm()
    }
})


