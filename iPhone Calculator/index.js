let form = document.forms.form
let numbers1 = document.querySelector('.numbers')
let inp = document.querySelector('input')
let numbers = []
let reload_numbers = () =>{
    for(let item of numbers){
            inp.innerText = item.btn
    }
}
form.onsubmit = () =>{

    event.preventDefault()

    let formData = new FormData(event.target)

    let obj = {}

    formData.forEach((value,key) =>{

        obj[key] = value

    })
    numbers.push(obj)

    reload_numbers()
}
