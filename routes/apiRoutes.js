// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../app/data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
res.json(friends);

});

app.post("/api/friends", function(req, res) {
  friends.push(req.body);
  var bestMatch=findFriend(req.body);
  res.send(JSON.stringify(bestMatch));
});
  

  
      function findFriend(person){
       
       for(i=0;i<friends.length-1;i++){
           var diff=0;
       
           var friend=friends[i];
           for(j=0;j<10;j++){
               
               var scoreDiff=   Math.abs(person.scores[j]-friend.scores[j]);
               console.log(scoreDiff);
       
           diff=diff+scoreDiff;
       
       }
           console.log(diff+"difference for " +i)    ;
       
       // console.log(diff)   ;
       friend.diff=diff;
       // friends.push(friend.diff);
       }
       friends.sort(function(a, b) {
           return a.diff - b.diff;
       });
       console.log(friends);

// var html="<div id='myModal' class='modal fade' role='dialog'>"
// html+='<div class="modal-dialog">'
// html+='<div class="modal-content">'
// html+='<div class="modal-header">'
// html+='<button type="button" class="close" data-dismiss="modal">&times;</button>'
// html+='<h4 class="modal-title">Best match</h4>'
// html+='</div>'
// html+=' <div class="modal-body">'
// html+='<p>name:friends[0].name</p>'
// html+='<p>photo:friends[0].photo</p>'


// html+=' <div class="modal-body">'
// html+=' </div>'
// html+=' <div class="modal-body">'
// html+='     <div class="modal-footer">'
// html+=' <div class="modal-body">'
// html+='     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
// html+=' <div class="modal-body">'
// html+='</div>'
// html+=' <div class="modal-body">'
// html+='   </div>'

// html+=' <div class="modal-body">'
// html+='</div>'
// html+=' <div class="modal-body">'
// html+='</div>'

       var bestMatch={
         name:friends[0].name,
         photo:friends[0].photo 
       }
       return bestMatch;
    //    alert("best match"+"\n"+friends[0].name+"\n"+friends[0].photo);
       
           }
          }
           
       
           
       
       
           
       
       
       


      

