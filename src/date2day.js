/**
 * Date to Day : The name specifies what it does. Given a date it will convert it into a day
 *  Example : 
 *         Include this line in your script  
 * 		<script type="text/javascript" src="https://github.com/manikanta-kondeti/date2day/date2day.js"></script>
 *         Usage : 
 *        var day = date2day("23/6/2016");  // input must be a string : <day/month/year> 
 *        console.log(day); // Output must be a string ('thursday') or ('not a valid date').
**/


var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday','saturday'];

// Internal function 
function extract_date_month_year(date) {
	var date = date.toString();
	list = date.split("/");
	if (list.length != 3) {	
		return false;
	}
	return list;	
}

/**
 *  @param : date(string)
 *     return : 'monday' or 'tuesday' or 'wednesday' .. 
 */
function date2day(date_passed) {
	var date = date_passed;
	var list_of_dmy = extract_date_month_year(date);
	
	if (list_of_dmy == false) {
		return 'Wrong date passed';
	}

	var y = parseInt(list[2]);
	var d = parseInt(list[0]);
	var m = parseInt(list[1]);
	var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
	if (m < 3) {
		y = y-1;
	}
	var day =  (y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + t[m-1] + d) % 7;
	return days[day];
}