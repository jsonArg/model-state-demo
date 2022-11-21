class TimerTest {

    name;

    startNow;

    constructor (payload) {
        let keys = Object.keys(payload);
        keys.forEach(value => {
            this[value] = payload[value];
        });
        this.start = this.start.bind(this);
        this.end   = this.end.bind(this);
        if (payload.startNow) (
            performance.mark(this.name + "_start")
        );
    }

    // Start the measurement
    start () {
        if (!this.startNow) {
            performance.mark(this.name + "_start");
        } else {
            console.log("remove {startNow:true} from constructor");
        }


    }

    // End the measurement
    end (print = false) {
        performance.mark(this.name + "_end");
        performance.measure("measure a to b", this.name + "_start", this.name + "_end");
        if (print) {
            console.log(performance.getEntriesByType("measure"));
            // Finally, clean up the entries.
            performance.clearMarks();
            performance.clearMeasures();
        }
    }

}

export default TimerTest;