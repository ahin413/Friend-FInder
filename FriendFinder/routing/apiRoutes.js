var friends = require("/Users/annemariehin/bootcamp/Friend-FInder/FriendFinder/app/data/friends.js");

module.export = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
            
        };
        var answers = req.body;
        var userScore = userData.scores;
        var totalDifference;

        for (var i= 0;i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0
            console.log(currentFriend.name);

            for(var a= 0; a <currentFriend.scores.length; a++){
                var currentFriendScore = currentFriend.scores[a];
                var currentUserSccore = userScores[a];

                totalDifference += Math.abs(parseInt(currentScore) - parseInt(currentFriendScore));
            }
            if(totalDifference <= bestMatch.friendDifference){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currenFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        friends.push(userData);
        res.json(bestMatch);
    });

};