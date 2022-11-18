
class SetModel {

    constructor (payload) {

       let  keys=Object.keys(payload)

        keys.forEach(value =>{
            this[value]=payload[value]
        })

        this.published = Math.random() < 0.5;
        this.cards = Math.floor(Math.random() * 100);
        this.students = Math.floor(Math.random() * 5000);

        this.rename= this.rename.bind(this)
        this.delete= this.delete.bind(this)
    }

    rename(new_name) {

        console.log(`sending to api(rename) ${this.name}=>${new_name}`)
    }
    delete() {
        console.log(`sending to api(delete)`,this)
    }

}
export default SetModel