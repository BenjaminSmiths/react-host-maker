var express = require('express');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', express.static(__dirname));

app.listen(app.get('port'), () => {
    console.log(`react-host-maker app running in ${process.env.NODE_ENV} env. Listening on port ${app.get('port')}`)
});