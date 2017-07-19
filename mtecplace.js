var completedCourses = transfercourses.concat(bSttrNcCourses).sort().join();
var allowableCourses = [];
var esl = parseInt(scoremichigan);
if (completedCourses.search("MTEC-111") == -1)
{
    allowableCourses.push('MTEC-111');
} 
else 
{
    if (completedCourses.search("MP-110") == -1)
    { 
        allowableCourses.push('MP-110');
    } 
    if (completedCourses.search("MP-113") == -1)
    {
        allowableCourses.push('MP-113');
    } 
    if (completedCourses.search("MTEC-214") == -1)
    {
        allowableCourses.push('MTEC-214');
    }
}
if (allowableCourses == [])
{
    allowableCourses.push("XX-570");
}
if (esl <= 4) 
{
    "<div style='color:navy'>None needed (ESL).";
}
else
{
    done = false;
    for (i in allowableCourses)
    {
        if (coursenumberactive.join().search(allowableCourses[i]) > -1)
        {
            done = true
            course = allowableCourses[i];
            break;
        }
    }
    if (done)
    {
        "<div style='color:navy'>"+course+": done.";
    }
    else
    {
        "<div style='color:#990000'>"+allowableCourses.join(' or ')+": needed.";
    }
}