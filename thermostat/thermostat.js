class Thermostat {
    constructor(){
        this.temperature = 20
        this.psm = false
    }
    up(){
        this.temperature+=1
    }
    down(){
        this.temperature-=1
    }
    getTemperature(){
        return this.temperature
    }
    setPowerSavingMode(Boolean){
        this.psm = Boolean
        if(Boolean===true){
            if(this.getTemperature()>25){
                this.temperature = 25
            }
            return "PSM is now on, max temperature is 25" 
        }
        if(Boolean===false){
            return "PSM is now off, max temperature is no longer 25"
        }
    }
}

module.exports = Thermostat;

// const thermostat = new Thermostat()
// thermostat.up()
// thermostat.up()
// console.log(thermostat.setPowerSavingMode(false))
// console.log(thermostat.getTemperature())
