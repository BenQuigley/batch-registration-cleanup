for (i in coursenumberandsectionactive){
    var sec = coursenumberandsectionactive[i];
    if (sec.search(/EN..-/) >= 0 || sec.search('XX-560') >= 0) {
        var section_match = sec;
    }
}
if (section_match) {
    "<div style='color:navy'>"+section_match+": Done.";
} else {
    "<div style='color:#990000'>Ensemble needed: add XX-560.";
}