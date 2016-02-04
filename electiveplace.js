var mincredits = new Number();
var electiveString = new String();
var credits = parseInt(credtermactive[0]);
var allcourses = transfercourses.concat(bSttrNcCourses).concat(coursenumberactive).sort().join();
var esl = parseInt(scoremichigan);

if (activeprogram.search('BM4') == 0)
{
    mincredits = 15;
}
else if (activeprogram.search('PDM') == 0 || activeprogram.search('TWO') == 0)
{
    mincredits = 12;
}
else 
{
    electivestring = "Error - what is this student's program?";
    mincredits = 0;
}
if (credits >= mincredits) 
{
    electivestring = "<div style='color:navy'>Min credits met ("+credits+" taken; "+mincredits+" required).";
}
else 
{ // the problem is in here - maybe it couldn't establish a "credits = credtermactive[0]"
    var electiveclass = "";
    var electivenote = "";
    if (allcourses.search("MB-101")>-1)
    {
        electiveclass = "XX-580";
        electivenote = " (because they have credit for MB-101)";
    }
    else if (esl >= 0 || esl <= 4) 
    {
        electiveclass = "XX-580";
        electivenote = " (students with ESL scores of "+michigan+" are ineligible for MB-101)";
    } 
    else 
    {
        electiveclass = "MB-101 (or ISKB-P111 if percussion and PDM)";
        electivenote = "";
    }
    electivestring = "<div style='color:#990000'>Min credits not met ("+credits+" taken; "+mincredits+" required). Add "+electiveclass+electivenote+".";
}
electivestring;