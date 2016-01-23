# usxPrinceCSS
CSS to create PDF via PrinceXML directly from a USX file or files.

This is an initial attempt to creata a CSS to use in Prince to create a PDF directly from a USX exported from Paratext. Other options to create a PDF require the SFM to be USFM compliant. This method means that the compliance is not needed to get a result.

ToDo:
* Need running header, added but not changing chapters. Can't see a way to have chapt range on changeing chapters on the page.
* fix verse and chapter to pull from number attribute with attr(number)     Done
* add page numbering  done
* add new page for new USX is needed.   Working
* Caller set to lower-alpha but callee is still a number.
* Footnotes affected by text-indent in paragraph
