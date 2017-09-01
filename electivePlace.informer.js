/*
 Evaluates whether the student meets the minimum number of credits,
 and suggests an alternative if they do not.
 */

var minCredits = new Integer();
var electiveClass = '';
var electiveNote = '';
var credits = parseFloat(credtermactive[0]);
var allCoursesArray = transfercourses.concat(bSttrNcCourses,coursenumberactive);
var allCourses = allCoursesArray.sort().join();
var esl = parseFloat(scoremichigan);
var program = typeof activeprogram == 'string'? activeprogram : activeprogram[0];

if (program.indexOf('BM4') == 0)
{
    minCredits = 15;
}
else if (program.indexOf('PDM') == 0 || program.indexOf('TWO') == 0)
{
    minCredits = 12;
}
if (credits >= minCredits)
{
    '<div style="color:navy">Min credits met ('+credits+' taken; '+minCredits+' required).';
}
else if (allCourses.indexOf('MB-101')>-1)
{
    '<div style="color:#990001">Min credits not met ('+credits+' taken; '+minCredits+' required). Add XX-580 (student already has credit for MB-101).';
}
else if (esl == null || esl <= 4)
{
    '<div style="color:#990001">Min credits not met ('+credits+' taken; '+minCredits+' required). Add XX-580 (due to ESL).';
}
else
{
    electiveClass = 'MB-101 (or ISKB-P111 if percussion and PDM)';
    electiveNote = '';
    '<div style="color:#990001">Min credits not met ('.concat(String(credits),' taken; ',String(minCredits),' required). Add ',electiveClass,'.');
}
