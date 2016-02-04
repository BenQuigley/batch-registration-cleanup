var placeholderCourses = ["LHUM-100-100", "LHUM-100-200", "LHUM-100-300", "LHUM-100-400", "LHUM-100-500", "LHUM-100-600", "LENG-111-100", "LENG-111-200", "LENG-111-300", "LENG-111-400", "LENG-111-500", "LENG-111-600", "CORE-111-100", "CORE-111-200", "CORE-111-300", "CORE-111-400", "CORE-111-500", "CORE-111-600"];
var removeTheseCourses = [];
var placeholderCoursesString = coursenumberandsectionactive.join();
for (i = 0; i <= placeholderCourses.length; i++)
{
    if (placeholderCoursesString.indexOf(placeholderCourses[i]) >= 0) 
    {
        removeTheseCourses.push(placeholderCourses[i]);
    }
}
removeTheseCourses.length == 0 ? "<div style='color:navy'>No placeholders found." : "<div style='color:#990000'>The student needs the following placeholder courses removed:\n" + removeTheseCourses.join();