var homeContent = 
`<div class="home">


    <h1>Header goes here</h1>
    <h2>Less important text goes here</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed est.</p>

    <p class="line1">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”</p>
    <p class="line2">John Smith</p>
    <p class="line3">Corporation CEO, books author.</p>



        <h1>UPCOMING EVENTS:</h1>

   
</div>`;

var aboutContent = 
`<div class="about">

    <h1>OUR HISTORY:</h1>


</div>`;

var contactContent = 
`<div class="contact">

<h1>CONTACT US:</h1>
<div class="line"></div>

</div>`;





function getPageContent(pageID, callback) {
    $("#app").html(eval(pageID));
    if (callback) {
        callback();
    }
}

export {getPageContent};