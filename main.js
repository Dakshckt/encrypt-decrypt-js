
const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const shift_numbers = document.getElementsByClassName('shift_numbers')
const shift_numbers_first = shift_numbers[0]
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')

button1.addEventListener('click' , ()=>{
    convert('+')
})
button2.addEventListener('click' , ()=>{
    convert('-')
})


function convert(ch){
    if(text1 == ''){
        alert("Enter the text first")
    }
    else{
        let txt = text1.value
        let new_data = ''
        let shift = shift_numbers_first.value
        for(let i = 0 ; i < txt.length ; i++){
            var unicode = parseInt(txt.charCodeAt(i))
            if(ch == '+'){
                var new_unicode = unicode + parseInt(shift)
            }
            else{
                var new_unicode = unicode - parseInt(shift)
            }
            var new_char = String.fromCharCode(parseInt(new_unicode))
            new_data = new_data + new_char
        }
        text2.value = new_data
    }
}



str = ''
for(let i = 1 ; i <= 25 ; i++){
    var new_option = document.createElement('option')
    new_option.innerHTML = i
    shift_numbers_first.appendChild(new_option)
}