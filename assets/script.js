

saveButton.onclick= () => {
    class Cat {
        constructor(name, type, food, gender) {
            this.name = name;
            this.type = type;
            this.food = food;
            this.gender = gender;
        }
    }
    let name = document.getElementById('nickname').value;
    let type= document.getElementById('catType').options[document.getElementById('catType').selectedIndex].text;

let food=[];
let checkboxes = document.querySelectorAll('.checkbox');
for (let checkbox of checkboxes) {
    if (checkbox.checked)
    {food.push(checkbox.value);}
}
let gender;
let radio = document.querySelectorAll('.radio');
if (radio[0].checked ) {
    gender=radio[0].value;
} else if (radio[1].checked) {
    gender=radio[1].value;
}


    let MyCat = new Cat(name, type, food, gender);
    console.log(`Кличка ${MyCat.name}, порода ${MyCat.type}, предпочетает ${MyCat.food} корм, ${MyCat.gender}`);

}