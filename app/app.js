import * as MODEL from "../model/model.js";

function init() {

    let currentHeroImage = "home";
    MODEL;


    $("nav a").click(function(e) {
        
        let btnID = this.id;
        let contentID = btnID + "Content";

        console.log(btnID);        

        $(".hero")
            .removeClass(`${currentHeroImage}`)
            .addClass(`${btnID}`);
        currentHeroImage = btnID;

        MODEL.getPageContent(contentID, addListeners);
    });
}

function addListeners() { 


    MODEL;

    $("section a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";

        console.log(btnID);
        MODEL.getPageContent(contentID, addListeners);
    });
}


$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent", addListeners)
});
