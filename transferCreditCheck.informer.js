/*
 Compares the student's current schedule of courses to their
 transfer and credit-by-exam courses, and complains about
 any currently enrolled courses that are redundant.
 */

var completedCourses = transfercourses.concat(bSttrNcCourses);
var duplicateCourses = [];

// For each LAHS (deprecated history code) credit, also consider
// its LVIS (new code) equivalent.
for (var i in completedCourses) {
    var completedCourse = completedCourses[i];
    if (completedCourse.indexOf("LAHS") === 0) {
        completedCourses.push(completedCourse.replace("LAHS", "LVIS"));
    }
    else if (completedCourse == 'LENG-201') {
        completedCourses.push('LENG-223');
    }
}

// List all currently enrolled courses that are redundant
// because of transfer or noncourse credit.
var completedCoursesString = completedCourses.join();
for (var j in coursenumberactive) {
    var course = coursenumberactive[j];
    if (completedCoursesString.indexOf(course) >-1)
    {
        duplicateCourses.push(course);
    }
}
if (duplicateCourses.length > 0) {
    "<div style='color:navy'>No transfer credit redundancies found.</div>"
}
else {
    "<div style='color:#990000'>The student is enrolled for the following courses which their transfer credits make redundant:\n" + duplicateCourses.join() + "</div>";
}