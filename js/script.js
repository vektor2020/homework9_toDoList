


let toDoList = {
    toDoHold: [],

    //добавляет текст
    addToDoTask(text) {
        const task = {
            text,
            id: Date.now(),
            status: false,
        }
        this.toDoHold.push(task)
    },

    //удаляет заметку по id
    removeTask(id){
        let indexId = this.toDoHold.findIndex(item => item.id == id);
        this.toDoHold.splice(indexId, 1);
        
    },

    //редактировать заметку
    overWrite(id, newText){
        let indexId = this.toDoHold.findIndex(item => item.id == id);
            this.toDoHold[indexId].text = newText;
    },

    //меняет статус
    changesStatus(id){
        let indexId = this.toDoHold.findIndex(item => item.id == id);
        this.toDoHold[indexId].status = true;
    },
}

console.log(toDoList);