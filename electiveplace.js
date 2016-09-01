var mincredits = new Number();
var credits = new Number();
var electiveclass = '';
var electivestring = '';
var electivenote = '';
var credits = parseFloat(credtermactive[0]);
var allcoursesarray = transfercourses.concat(bSttrNcCourses,coursenumberactive);
var allcourses = allcoursesarray.sort().join()
var esl = parseFloat(scoremichigan);
program = typeof activeprogram == 'string'? activeprogram : activeprogram[0]

if (program.indexOf('BM4') == 0)
{
    mincredits = 15;
}
else if (program.indexOf('PDM') == 0 || program.indexOf('TWO') == 0)
{
    mincredits = 12;
}
if (credits >= mincredits)
{
    '<div style="color:navy">Min credits met ('+credits+' taken; '+mincredits+' required).';
}
else if (allcourses.indexOf('MB-101')>-1)
{
    '<div style="color:#990001">Min credits not met ('+credits+' taken; '+mincredits+' required). Add XX-580 (student already has credit for MB-101).';
}
else if (esl == null || esl <= 4)
{
    '<div style="color:#990001">Min credits not met ('+credits+' taken; '+mincredits+' required). Add XX-580 (due to ESL).';
}
else
{
    electiveclass = 'MB-101 (or ISKB-P111 if percussion and PDM)';
    electivenote = '';
    '<div style="color:#990001">Min credits not met ('.concat(String(credits),' taken; ',String(mincredits),' required). Add ',electiveclass,'.');
}
