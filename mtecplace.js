ear completedcourses = transfercourses.concat(bSttrNcCourses).sort().join();
var allowable_classes = []
var esl = parseInt(scoremichigan);
if (completedcourses.search("MTEC-111") == -1) 
{
    allowable_classes.push('MTEC-111');
} 
else 
{
    if (completedcourses.search("MP-110") == -1)
    { 
        allowable_classes.push('MP-110');
    } 
    if (completedcourses.search("MP-113") == -1)      
    {
        allowable_classes.push('MP-113');
    } 
    if (completedcourses.search("MTEC-214") == -1) 
    {
        allowable_classes.push('MTEC-214');
    }
}
if (allowable_classes == [])
{
    allowable_classes.push("XX-570");
}
if (esl <= 4) 
{
    "<div style='color:navy'>None needed (ESL).";
}
else
{
    done = false;
    for (i in allowable_classes)
    {
        if (coursenumberactive.join().search(allowable_classes[i]) > -1)
        {
            done = true
            course = allowable_classes[i];
            break;
        }
    }
    if (done)
    {
        "<div style='color:navy'>"+course+": done.";
    }
    else
    {
        "<div style='color:#990000'>"+allowable_classes.join(' or ')+": needed.";
    }
}
