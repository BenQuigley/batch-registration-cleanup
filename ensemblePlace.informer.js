var ensemble = new String();
if (coursenumberactive.join().search(/EN..-/) == -1 && coursenumberactive.join().search("XX-560") == -1) {
    ensemble = "<div style='color:#990000'>Ensemble needed: add XX-560.";
} else {
    ensemble = "<div style='color:navy'>Ensemble: Done.";
}  
ensemble;