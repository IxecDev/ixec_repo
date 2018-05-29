#!/bin/sh

if [ ! -z $1 ]; then
    
    echo "ApplicationModel.controller('${1}Controller', ['\$scope', function (\$scope) {" >> controller/$1.controller.js
    echo "" >> controller/$1.controller.js
    echo "}]);" >> controller/$1.controller.js

    echo "${1} file!" >> template/$1.template.html

else
    echo "Empty parameter!"
fi