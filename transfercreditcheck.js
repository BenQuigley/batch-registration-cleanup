var completedcourses = transfercourses.concat(bSttrNcCourses).sort().join();
var duplicateCourses = [];
for (i in coursenumberactive) 
{
    if (completedcourses.indexOf(coursenumberactive[i]) >-1) 
    {
        duplicateCourses.push(coursenumberactive[i]);
    }
}

duplicateCourses ? "<div style='color:#990000'>The student is enrolled for the following courses which their transfer credits make redundant:\n"+duplicateCourses.join() : "<div style='color:navy'>No transfer credit redundancies found.";
