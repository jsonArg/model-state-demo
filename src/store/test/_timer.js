
class TimerTest {

    constructor (payload) {

        let  keys=Object.keys(payload)

        keys.forEach((value,index) =>{
            this[value]=payload[value]
            if(value==='index')
            {
                this.id=this.id+index+1
            }
        })

        this.students = Math.floor(Math.random() * 5000);

        this.rename= this.rename.bind(this)
        this.delete= this.delete.bind(this)
    }

    start(new_name) {

        console.log(`sending to api(rename) ${this.name}=>${new_name}`)
    }
    end() {
        console.log(`sending to api(delete)`,this)
    }
    printMeasurment(){

    }

}
export default SetModel