# #
#  This script renames all folder names to one which is
#  entered here
#
#!/bin/bash

# #
# Validate arguments
if [ -z $1 ] || [ -z $2 ] ;
then
	
	echo "Syntax: rename <old_name> <new_name>"
	exit 1;

fi

# #
# Declare variables
oldName=$1
newName=$2

address[0]=modules/${oldName}.module.js

# #
# Proceed to check if every file exist
for item in "${address[@]}"
do

	if [ ! -f $item ]; then
		echo "Some files do not exist. Cannot proceed."
		exit 1;
	fi

done