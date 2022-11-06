
Architecture:

    Throughout this projectt I used Express HTML, Javascript and Angular on the front end to develop both a 
primary content website and a secondary admin SPA. Most of the Express related work was focused in the public
facing webpage that allows a user to browse several pages from rooms, trips, cusine and blogs. Express was used
with the MVC model to build this functionality and serve content (with the help of handlebars templating) to the
site visitor. The handle bars HTML templating allowed quick and small changes to affect the entire website without
actually needing to edit code on each individual page. Angular allowed for the development of a functional SPA for
the admin of the site to make modifications with relative ease. Angular Allowed tthe use of compartmentalized components
and services to make up the majority of the website. Both major technologies are conducive to building modern web 
applications that are fast and data efficient as users will generally only need to call the backend for data rather
than calling the backend for each new webpage and build. While there are more calls in the express design as it is not 
a single page application it does generally allow the frontend client to do a fair amount of the processing. On the 
other hand, in the Angular SPA the vast majority of the computation and work is done on the clients machine saving 
valuable server resources for handling HTTP transactions and serving data to the visitor. 
    The backend used a NoSQL MongoDB simply because it made significantly more sense in an application like this. 
The data being stored and retrieved was best served by the document style and schema based approach of MongoDB whereas
a relational database would have made little sense as the data was not necessarily related. For example, an SQL database storing
and of the individual data points from the site could have worked, though this would have involved converting the data into and
out of objects purely for storage. MongoDB on the other hand allows data to be stored in JSON like objects/documents that 
can easily be used to populate a webpage or send a request. The indexing style of MongoDB is also conducive to a webpage like this
where generally 1 or more keys may be used to index/find data and that data's schema is consistent within the collection it is 
stored in.  

Functionality:
    JSON (Short for JavScript Object Notation) is effectively a way to store and send data in a way that can be directly turned into 
JavaScript Objects or dictionaries styyle data formats. JSON is basically a Key-Value pairing of data that can be easily parsed
into the data structures most OOP languages use. JavaScript on the other hand contains JSON like objects and actually performs work
as a programming language. The reason JSON is so good at tieing the frontend and backend together is that itt can easily be converted
to and from active data structures to storage in a clear and concise way. JSON, similar to key-value data structures does not care what
order it is in, a change to the ordering of a Schema, or an individual field does not risk breaking the conversion. Adding or removing
fields is as simple as adding a couple lines of code and involves no convoluted array parsing, or other order dependent methods to convert. 
Generally speaking, JSON is just easier and faster to work with and is by far less complicated to review.
    Throughout the modules sections of the code have been refactored multiple times to be more efficient. Initially all of the data was
held in json documents. Each webpage was independent with common code, and each webpage was servered as an HTML docuument. Through refactoring
into handlebars templates the common elements (such as headers and footers) were converted into templates that could be used by each page, yet
when the template was updated those updates would be reflected accross all pages using those components. Next, common items like trips or rooms
that had all the same html elements with different data were converted to templates as well, allowing 1 JSON document to hold all the data, and
the webpage to dynamically create each element. In this way only 1 small block of code would need updated to change the display format of all elements
on a single page. For example, changing the title of a specific element from text to a link only involved updating the template, and allowed each
piece of content to be updated, rather than updating each title individually on a page. This allows for data to be updated quickly and easily without
the need to update potentially dozens of lines of code. Next, refactoring the JSON objects into database documents allow this data to be stored on the 
backend and made the saving and changing of data points easy and targetable. Finally, in the SPA building the page out of a series of components allows
each component to be isolated and similarly templated, making the code significantly easier to update while providing the ability to simply add more
data without making any code changes to display that new data. This process of encapsulating and isolating each UI component drastically improves 
maintainability and reduces the chance that one mistake in a large document can lead to bugs that permeate through the entire page or site. In effect
this also allows testing to only focus on one element at a time rather than worrying that a minor mistake in the displayy of one item will cause the entire 
page to break.

Testing: 
    Testing is best performed first in isolation and then as an entire suite. A great example of this is testing each individual API call with a 
tool like postman that allows a user to quicklyy determine if API calls are working correctly and if the document returned is correct. This testing 
allows you to quickly isolate problem in code or calls, as a API call that works in postman but not in your application can point you to the call itself
or the routing of said call being the issue. If the call is working and data is still not being displayed this can isolatte the UI component, overall
making testing and debugging significantly faster and easier. Testing additional layers of security also helps as you can test that the authentication 
or security works before even building the code to add these security protocols. This way you are not troubleshooting code that may be perfectly adequete
because authentication was not set up appropriately in the first place. 

Reflection:
    Personally, I think this course has taught me alot, not just in terms of the technology stack I used but in terms of understanding the requirements 
and time required to build a web application like this. While I primarily work as a Java developer at the moment, the exporsure to Postman and even 
the abundence of API calls, HTTP, and CRUD usage has already helped out at work as I better understand how the technology works as a whole. While I do not
think I have truely mastered any individual component of this course (in a professional sense) I do think I have greatly improved my ability to estimate
requirements and have drastically improved my skills in terms of web technologies. I am relatively confident now that I can build web applications at a 
relatively large scale without very muchg help. I have also learned enough about these technologies that moving into a role using them would not be a
significant difficultly simply because I already have a base understanding of the technologies and their implementation methods.  
