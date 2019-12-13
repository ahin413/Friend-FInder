var path = require("path");

modules.export = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(_dirname, "/../public.survey.html"));
    });
    app.get("*", function(req, res)
    {
        res.sendFile(path.join(_dirname, "/../public/home.html"));
    });
};