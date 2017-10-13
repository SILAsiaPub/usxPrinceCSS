# usxPrinceCSS

CSS to create PDF via PrinceXML directly from a USX file or files.

This is an initial attempt to creata a CSS to use in Prince to create a PDF directly from a USX exported from Paratext. Other options to create a PDF require the SFM to be USFM compliant. This method means that the compliance is not needed to get a result. That is not always a good thing but may same some a lot of frustration. It may even help find the problem.

Not all USFM is in the CSS yet.

Featurse:
* Handles figures
  * Figures can be left where they are especially with two columns.
  * Figures large if one column.
  * Figures can be half column.
  * Automatic adjustment for `size` attributes: `page` or `col` markup in original
  * Can adjust to force pictures to top or bottom from `loc` attributes: `t` and `b`. 
* Drop caps for chapter numbers. Could do with more work.
* Verse numbers
* Footnotes with letter callers
* Anything in USX can be styled by CSS even if has not been added yet.
* Running header only displays last chapter on page.
* Page numbering.
* Force new page for start of new book.

ToDo:
* Left and right pages and headers
* Footnotes affected by text-indent in paragraph
* Need to add more USFM markup to CSS

