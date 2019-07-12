for i in *@0,25x.png;
do echo -e "<img src='./images/$i' \n\tsrcset='./images/$i 1x,\n\t\t ./images/${i%???.*}5x.png 2x'\n\tclass='overlay abs'\n\tstyle='height:75%; top:0px; left:0vw;' />\n" >> '../../index.html';
done;
