const timer = (deadline) => {
    let intervaStop
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    console.dir(timerHours)
    
    const getTimerRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timerRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timerRemaining / 60 / 60 / 24)
        let hours = Math.floor((timerRemaining / 60 / 60) % 24).toString().padStart(2,'0')
        let minutes = Math.floor((timerRemaining / 60) % 60).toString().padStart(2,'0')
        let seconds = Math.floor(timerRemaining % 60).toString().padStart(2,'0')

        return {

            timerRemaining,
            hours,
            minutes,
            seconds,
        }

    }

    const upDateClock = () => {
        let getTime = getTimerRemaining()

         
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds
        console.log('я вывожусь раз в секунду')

        if(getTime.timerRemaining <= 0){
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent =  '00'
            clearInterval(intervaStop)
        }
        
    }
    intervaStop = setInterval(() => { 
        upDateClock()
       },1000)
}


export default timer