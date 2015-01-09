name: latex-eps-openoffice-draw-and-other
layout: post
title: Latex, eps, OpenOffice Draw and other stuff
time: 2009-05-04 14:00:00 +03:00

I've had quite a hard time getting a correct eps file to include in my thesis. I use eps format basically because it is a vector image format so the quality does not degrade as the document is enlarged. But, and that is a big "but", generating correct eps files are hard for OpenOffice.org Draw and Calc. I created a table in OOo Draw and exported it to pdf file as one cannot export to eps directly. But when I include it in my thesis.tex file, latex is complaining about missing bounding box. I'm not sure why, is OOo creating an incomplete, or non standard, pdf file? To circumvent this, I made use of some programs. First of all, I used "pdftops -eps" command to convert the pdf file to eps. Than I used the fixbb script so that the extra space around the image could be cropped. When I included the final eps file to my thesis file, everything worked like a charm. I hope this helps others in the same situtation. Cheers!
