for i in *.jpg;
do echo -e "<img src='./images/$i' \n\tclass='modal-enabled abs'\n\tstyle='height:75%; top:0px; left:0vw;' />\n" >> '../../index.html';
done;
