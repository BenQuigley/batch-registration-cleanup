var completedcourses = transfercourses.concat(bSttrNcCourses).sort().join();
var mtecclass = new String();
var esl = parseInt(scoremichigan);

if (completedcourses.search("MTEC-111") == -1) 
{
    mtecclass = "MTEC-111";
} 
else if (completedcourses.search("MP-110") == -1) 
{
    mtecclass = "MP-110";
} 
else if (completedcourses.search("MP-113") == -1) 
{
    mtecclass = "MP-113";
} 
else if (completedcourses.search("MTEC-214") == -1) 
{
    mtecclass = "MTEC-214";
} 
else 
{
    mtecclass = "XX-580";
}
if (esl >= 0 && esl <= 4) 
{
    "<div style='color:navy'>None needed (ESL).";
}
else if (coursenumberactive.join().search(mtecclass)>-1) 
{
    "<div style='color:navy'>"+mtecclass+": done.";
} 
else 
{
    "<div style='color:#990000'>"+mtecclass+": needed.";
}