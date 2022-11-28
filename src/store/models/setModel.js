class SetModel {
    name;
    published;
    counter;

    constructor (payload=false) {

        if(payload){
            let keys = Object.keys(payload);

            keys.forEach(value => {
                this[value] = payload[value];

            });

        }

        this.published = Math.random() < 0.5;
        this.cards     = Math.floor(Math.random() * 100);
        this.students  = Math.floor(Math.random() * 5000);
        

         this.rename  = this.rename.bind(this);
         this.delete  = this.delete.bind(this);
         this.add     = this.add.bind(this);
   

    }

    rename (new_name) {
        console.log(`sending to api waiting... \n  ${this.name} => ${new_name}`);
        setTimeout(() => {
            console.log(`rename ok ${new_name}`);

            this.name = new_name;
        }, 500);
    }

    add () {
        this.students++;
    }

    delete () {
        console.log(`sending to api(delete)`, this);
        setTimeout(() => {
            this.published = !this.published;
        }, 500);
    }

   



}

export default SetModel;