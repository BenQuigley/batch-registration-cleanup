/*
 Compares the student's current schedule of courses to their
 transfer and credit-by-exam courses, and complains about
 any currently enrolled courses that are redundant.
 */

var completedCourses = transfercourses.concat(bSttrNcCourses).sort().join();
var duplicateCourses = [];
for (i in coursenumberactive) 
{
    if (completedCourses.indexOf(coursenumberactive[i]) >-1)
    {
        duplicateCourses.push(coursenumberactive[i]);
    }
}
duplicateCourses ? "<div style='color:#990000'>The student is enrolled for the following courses which their transfer credits make redundant:\n"+duplicateCourses.join() : "<div style='color:navy'>No transfer credit redundancies found.";
