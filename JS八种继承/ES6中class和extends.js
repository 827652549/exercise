class Father{
    constructor(name){
        this.name = name;
    }

    work(){
        console.log(this.name+'刷碗');
    }
}

class Son extends Father{
}

new Son('儿子').work();
