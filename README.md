1. The link to website https://dzmitrykazlou3.github.io/FrontCamp-Home1/
   It works in IE10;
   
2. here is sources of babel plugin.
   
   <b>Source Code:</b></br>
   let trueInSources = true;<br />

    let trueInSources2CSV = true,<br />
    falseInSourcesCSV = false,<br />
    trueInsources3 = true;<br />

    let trueString = 'true',<br />
    faslseString = 'false',<br />
    trueString2 = "True",<br />
    falseString2 = "False";<br />

    let capitalTrue = True;<br />
    let capitalFalse = False;<br />

    if (a === true) {<br />
    
    }
	
	<b>After plugin:</b><br />
	'use strict';<br />

    var trueInSources = false;<br />

    var trueInSources2CSV = false,<br />
        falseInSourcesCSV = true,<br />
        trueInsources3 = false;<br />

    var trueString = 'true',<br />
        faslseString = 'false',<br />
        trueString2 = "True",<br />
        falseString2 = "False";<br />

    var capitalTrue = True;<br />
    var capitalFalse = False;<br />

    if (a === true) {}