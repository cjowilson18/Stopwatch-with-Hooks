const {useState, useEffect, useRef} = React;
const StopWatch = () => {
    let [timePassedInMilliseconds, setTimePassed]= useState(0);
    const timer=useRef(null);

    const start = () => {
        if (!timer.current) {
            let startTime= Date.now();
            timer.current = setInterval(() => {
                console.log("timePAssedInMilliSeconds: ", timePassedInMilliseconds);
                const stopTime=Date.now();
                setTimePassed(timePassedInMilliseconds=> stopTime- startTime + timePassedInMilliseconds);
                startTime=stopTime;
            },250);
        }
    };
    const stop = () => {
        console.log("stop: ", timer.current);
        window.clearInterval(timer.current);
        timer.current=null;
    } ;
    const reset = () => {
        stop();
        setTimePassed(0);
    };

    return (
        <div>
            <h2 className='border px-3 py-4 rounded my-3 mx-auto text-center' style={{maxWidth:"300px"}}>
                {Math.floor(timePassedInMilliseconds /1000)}s
            </h2>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary mr-2" onClick={start}>
                    start
                </button>
                <button className="btn btn-outline-danger mr-2" onClick={stop}>
                    STOP 
                </button>
                <button className='btn btn-outline-warning mr-2' onClick={reset}>
                    reset
                </button>
            </div>
        </div>
    )
}



ReactDOM.render(
    <StopWatch />,
    document.getElementById('root')
  );