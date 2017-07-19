var dip = false
if (activeprogram.search('PD') == 0 | activeprogram.search('TW') == 0)
{
    dip = true
}
if (dip == true && scoremichigan == 11)
{
    "<div style='color:navy'> No liberal arts class needed: non-ESL PDM student."
}
else
{
    var possibleCourses = new Array();
    switch (scoremichigan)
    {
        case 11:
            var completedCourses = transfercourses.concat(bSttrNcCourses).sort().join();
            if (completedCourses.search("LENG-111") == -1)
            {
                possibleCourses.push("LENG-111");
            } 
            else if (completedCourses.search("LENG-201") == -1)
            {
                possibleCourses.push("LENG-201");
            } 
            else if (completedCourses.search("LAHS-231") == -1)
            {
                possibleCourses.push("LAHS-231");
                possibleCourses.push("LMAS-");
                possibleCourses.push('LAHS-');
            }
            else
            {
                possibleCourses.push('XX-551');
            }
            break;
        case null:
        case 0:
        case 1:
            possibleCourses.push("XX-552");
            break;
        case 2:
            possibleCourses.push("LENG-102");
            break;
        case 4:
            possibleCourses.push("LENG-104");
            break;
        case 5:
            possibleCourses.push("LENG-105");
            break;
        case 6:
            possibleCourses.push("LENG-106");
            break;
    }
    var done = false;
    for (i in possibleCourses)
    {
        course = possibleCourses[i];
        if (coursenumberandsectionactive.join().search(course) > -1)
        {
            var courseEnrolled = course;
            done = true;
            "<div style='color:navy'>"+courseEnrolled+": done.";
            break;
        }
    }
    if (done == false)
    {
        "<div style='color:#990000'>"+possibleCourses.join(' or ')+": needed.";
    }
}