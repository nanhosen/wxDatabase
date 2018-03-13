var msMinute = 60000;
var finalYear = "2017";
var finalMonth = "12";
var finalDay = "31";
var finalHour = "23";
var finalSecond = "59";
var endDateJS = new Date(finalYear + "-" + finalMonth + "-" + finalDay + " " + finalHour + ":" + finalSecond + " UTC");
var endDateJSUnix = new Date(endDateJS).getTime()
// var dbDate = "20171031";
//	var prevYear = dbDate.slice(0,4);
	// var prevMonth = dbDate.slice(4,6);
	// var prevDay = dbDate.slice(6,8);

function addMonths(startMonth,startYear){
	console.log(startMonth,'startMonth')
	var newMon = startMonth + 1;
	if(newMon>12){
		var monDiff = newMon-12;
		var finalnewMon = monDiff;
		var endYear = (startYear + 1);
	}
	else{
		var finalnewMon = newMon;
		var endYear = startYear;
	}
	console.log(newMon,finalnewMon)
	return [finalnewMon,endYear];
}


async function makeRequestDate(dbDate,stn){
	// console.log('inMakeRequestDate')
	// var prevYear = year.toString();
	// var prevMonth = month.toString();
	// var prevDay = day.toString();
	var prevYear = dbDate.slice(0,4);
	var prevMonth = dbDate.slice(4,6);
	var prevDay = dbDate.slice(6,8);
	// console.log(typeof prevYear,typeof prevYear1,typeof prevMonth,typeof prevMonth1,typeof prevDay,typeof prevDay1)
	var prevDateUnix = new Date(prevYear + "-" + prevMonth + "-" + prevDay + " 23:59 UTC").getTime();
	var newStart = prevDateUnix + msMinute;
	var newStartDayDate = new Date(newStart).toISOString();
	var newStartDaySplit = newStartDayDate.split(/[-T:.]+/);
	var newStartDay = newStartDaySplit[2].toString();
	var newStartMonth = newStartDaySplit[1].toString();
	var newStartYear = newStartDaySplit[0].toString();
	var newStartHour = newStartDaySplit[3].toString();
	var newStartMinute = newStartDaySplit[4].toString();
	var newStartSecond = newStartDaySplit[5].toString();
	var endMonYear = await addMonths(Number(newStartMonth),Number(newStartYear));
	var endMon = endMonYear[0].toString();
	if(endMon<10){
		endMon = ('0' + endMon).slice(-2);
	}
	// console.log('endMon', endMon)
	var endYear = endMonYear[1].toString();
	var endDay = newStartDay;
	var endDateDate = new Date(endYear + "-" + endMon + "-" + endDay + " " + finalHour + ":" + finalSecond + " UTC");
	var endDateDateJSUnix = new Date(endDateDate).getTime()
	var curDate = new Date(endDateDateJSUnix).toISOString();
	var finalDate = new Date(endDateJSUnix).toISOString();
	if(newStart<endDateJSUnix){
		if(endDateDateJSUnix<endDateJSUnix){
			//end date is new end date
			var reqStart = newStartYear + newStartMonth + newStartDay + newStartHour + newStartMinute;
			var reqEnd = endYear + endMon + endDay + "2359";
		}
		else{
			// end date is final end date
			var reqStart = newStartYear + newStartMonth + newStartDay + newStartHour + newStartMinute;
			var reqEnd = finalYear + finalMonth + finalDay + "2359";

		}

		// console.log('request', reqStart + '&end=' + reqEnd)
		var dateReqString = reqStart + '&end=' + reqEnd;
		var req = "https://api.synopticlabs.org/v2/stations/timeseries?&token=ea0ea69fd87b4eac81bfc08cb270b8e8&start=" + dateReqString + "&obtimezone=utc&output=json&stid=" + stn;
		console.log('dateReqString', dateReqString)
		return req
	}
	else{
		console.log('all done', curDate,finalDate)
	}

}
// makeRequestDate("20061231","KBMC")
module.exports = makeRequestDate