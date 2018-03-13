"200701010000&end=200710312359"
"lastdate from getDate 20071031"
var startYear = "2007";
var startMonth = "01";
var startDay = "01";
var startHour = "00";
var startSecond = "00";
var finalYear = "2017";
var finalMonth = "12";
var finalDay = "31";
var finalHour = "23";
var finalSecond = "59";
var msMinute = 60000;
var endDateJS = new Date(finalYear + "-" + finalMonth + "-" + finalDay + " " + finalHour + ":" + finalSecond + " UTC");
var endDateJSUnix = new Date(endDateJS).getTime()
// console.log(new Date(endDateJSUnix).toISOString())
var end = finalYear + finalMonth + finalDay + finalHour + finalSecond
var bl = "2007-01-01T00:00:00.000Z";
async function endDateToString(month,year){
	var endDate = await add6Months(month,year);
	// console.log('endDate', endDate)
	var monthString = endDate[0].toString();
	var yearString = endDate[1].toString();
	// return[endDate[0].toString,endDate[1].toString];
	// console.log('prom',monthString)
	return [monthString,yearString]
}
function add6Months(startMonth,startYear){
	var newMon = startMonth + 6;
	// console.log('newMon', newMon)
	if(newMon>12){
		var monDiff = newMon-12;
		var finalnewMon = monDiff;
		var endYear = (startYear + 1);
	}
	else{
		var finalnewMon = newMon;
		var endYear = startYear;
	}
	return [finalnewMon,endYear];
}

// 
// console.log('nextMonth', add6Months(12,2007))



endDateToString(12,2007)
	.then((first)=>{
		var firstEndMonth = first[0];
		var firstEndYear = first[1];
		var firstEndDateMW1 = firstEndYear + firstEndMonth + startDay + startHour;
		return firstEndDateMW1;
	})
	.then((second)=>{
		// var secondStartDate = 
	})

// console.log('endString',endString)
var firstStartDateMW = startYear + startMonth + startDay+ startHour;
"lastdate from getDate 20071031"
"200701010000&end=200710312359"


async function makeRequestDate(year,month,day){
	var prevYear = year.toString();
	var prevMonth = month.toString();
	var prevDay = day.toString();
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
	var endMonYear = await add6Months(month,year);
	console.log(endMonYear, 'endmonyear')
	var endMon = endMonYear[0].toString();
	if(endMon<10){
		endMon = ('0' + endMon).slice(-2);
	}
	console.log('endMon', endMon)
	var endYear = endMonYear[1].toString();
	var endDay = newStartDay;
	// console.log('endDat', endDay)
	// var endDay = 
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
		// console.log('keep going',curDate,finalDate)
	}
	else{
		// console.log('all done', curDate,finalDate)
	}
	console.log('start',reqStart,'end',reqEnd)

}
makeRequestDate(2017,10,31)
// console.log('first MW start Date: ',firstStartDateMW)
// var firstEndDateMW = 
// var firstStartDateJS = new Date(startYear + "-" + startMonth + "-" + startDay + " " + startHour + ":" + startSecond + " UTC");
var firstStartDateJS = new Date(startYear + "-" + startMonth + "-" + startDay);
var firstStartMonth = firstStartDateJS.getMonth();
// var firstStartDateJSIso = new Date(firstStartDateJS)
//.toISOString();
// var firstEndDateJSMonth 
// console.log(new Date("2007-01-01"))

var dbEndDate = "2007-10-31";
var endToDate = new Date(dbEndDate);
