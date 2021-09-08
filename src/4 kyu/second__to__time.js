
function formatDuration (seconds) {

    let year;
    let result__year = "";
    let day;
    let result__day = "";
    let hour;
    let result__hour = "";
    let minute;
    let result__minute = "";
  let result__second = "";
  let val;

  let sec = seconds;
    sec = Number(sec);

    if( sec === 0 ) {
        return "now";
    }
    
    year = Math.floor(sec / 31536000);
    if( year === 1 ) {
        result__year = "1 year";
    } else if( year > 1 ) {
        result__year = `${year} years`;
    }

    val = sec % 31536000;

    day = Math.floor(val / 86400);
    if( day === 1 ) {
        result__day = "1 day";
    } else if( day > 1 ) {
        result__day = `${day} days`;
    }

    val = sec % 86400;

  hour = Math.floor(val / 3600);
  if( hour === 1 ) {
        result__hour = "1 hour";
    } else if( hour > 1 ) {
        result__hour = `${hour} hours`;
    }

  val = sec % 3600;

  minute = Math.floor(val / 60);
  if( minute === 1 ) {
        result__minute = "1 minute";
    } else if( minute > 1 ) {
        result__minute = `${minute} minutes`;
    }

    result__second = val % 60;
    
    if( result__second === 1 ) {
        result__second = "1 second";
    } else if( result__second > 1 ) {
        result__second = `${result__second} seconds`;
    }

    let result__massive = [result__year, result__day, result__hour, result__minute, result__second];
    let finish__massive = [];

    for( let i = 0; i < result__massive.length; i++) {

        if( result__massive[i] != "") {

            finish__massive = finish__massive.concat( result__massive[i] );

        }
 
    }

    if( finish__massive.length == 1 ) {
        return finish__massive[0];

    } else if( finish__massive.length == 2 ) {
        return finish__massive[0] + " and " + finish__massive[1];

    } else if( finish__massive.length === 3 ) {
        return finish__massive[0] + ", " + finish__massive[1] + " and " + finish__massive[2];
        
    } else if( finish__massive.length === 4 ) {
        return finish__massive[0] + ", " + finish__massive[1] + ", " + finish__massive[2] + " and " + finish__massive[3];
        
    } else if( finish__massive.length === 5 ) {
        return finish__massive[0] + ", " + finish__massive[1] + ", " + finish__massive[2] + ", " + finish__massive[3] + " and " + finish__massive[4];
    }

}
