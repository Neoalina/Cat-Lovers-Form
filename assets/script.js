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
        if (checkbox.checked){
            food.push(checkbox.value);
        }
    }

    let gender;
    let radio = document.querySelectorAll('.radio');
    for (let r of radio) {
        if (r.checked) {
            gender=r.value;
        }
    }

    let MyCat = new Cat(name, type, food, gender);
    console.log(`Кличка ${MyCat.name}, порода ${MyCat.type}, предпочетает ${MyCat.food} корм, ${MyCat.gender}`);
}