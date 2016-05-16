if (activeprogram.search('PDM') == 0)
{
    "<div style='color:navy'>No LHUM needed (PDM student)."
}
else if ( activeprogram.search('TWO') == 0)
{
    "<div style='color:navy'>No LHUM needed (TWO student)."
}
else {
    var lhumScore = bSttrLhumScore;
    var lhumSection = '';
    switch (lhumScore)
    {
        case '':
            break;
        case 1:
            lhumSection = 'LHUM-100-1A';
            break;
        case 2:
            lhumSection = 'LHUM-100-1B';
            break;
        case 3:
            lhumSection = 'LHUM-100-2A';
            break;
        case 4:
            lhumSection = 'LHUM-100-2B';
            break;
        case 5:
            lhumSection = 'LHUM-100-3A';
            break;
        case 6:
            lhumSection = 'LHUM-100-3B';
            break;
        case 7:
            lhumSection = 'LHUM-100-9A';
            break;
    }
	if (lhumSection)
	{
		if (coursenumberactive.join().search(lhumSection)>-1) 
		{
			"<div style='color:navy'>"+lhumSection+": done."
		} 
		else 
		{
			"<div style='color:#990000'>"+lhumSection+": needed."
		}
	}
	else
	{
			"<div style='color:navy'> None assigned."
	}
}