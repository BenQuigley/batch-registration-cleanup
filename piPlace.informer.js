/*
 Checks whether the student is in an private instruction or the PI placeholder.
 */

for (i in coursenumberandsectionactive){
    var sec = coursenumberandsectionactive[i];
    if (sec.search(/PI..-/) >= 0 || sec.search('XX-590') >= 0) {
        var section_match = sec;
    }
}
if (section_match) {
    "<div style='color:navy'>"+section_match+": Done.";
} else {
    "<div style='color:#990000'>PI needed: add XX-590.";
}  