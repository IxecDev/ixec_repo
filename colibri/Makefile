#
####### PROGRAMS
CC=g++
AR=ar

#
####### PROGRAMS FLAG
AR_FLAGS=-r
COMPILE_FLAG=-c

#
####### ABBREVIATURES
LIBRARY_ABBR=rary
LIBRARY_ABBR_FLAG=-l$(LIBRARY_ABBR)

#
####### DIRECTORIES PATH
BIN_DIR=./bin

LIBRARY_DIR=./lib
LIBRARY_FLAG=-L$(LIBRARY_DIR)

INCLUDE_DIR=./include
INCLUDE_FLAG=-I$(INCLUDE_DIR)

SRC_DIR=./src

#
####### SOURCE CODE
BOILERPLATE_DIR=../boilerplate

EXECUTABLE=$(BIN_DIR)/colibri
MAIN_CODE=$(SRC_DIR)/colibri.cpp

LIBRARY=$(LIBRARY_DIR)/lib$(LIBRARY_ABBR).a

SRC_FILES=$(SRC_DIR)/core.cpp $(SRC_DIR)/builder.cpp $(SRC_DIR)/generator.cpp $(SRC_DIR)/manager.cpp
OBJ_FILES=core.o builder.o generator.o manager.o

#
####### COMMANDS
REMOVE_OBJ_FILES=rm -f $(OBJ_FILES)


#                     CODE TO EXECUTE
# # # # # # # # # # # # # # # # # # #

all:
	make $(OBJ_FILES)
	make $(LIBRARY)
	make $(EXECUTABLE)
	make cp
	make clean

cp:
	cp $(EXECUTABLE) $(BOILERPLATE_DIR)

obj:
	make $(OBJ_FILES)

library:
	make $(LIBRARY)

executable:
	make $(EXECUTABLE)

$(OBJ_FILES): $(SRC_FILES)
	$(CC) $(COMPILE_FLAG) $(SRC_FILES) $(INCLUDE_FLAG)

$(LIBRARY): $(OBJ_FILES)
	$(AR) $(AR_FLAGS) $(LIBRARY) $(OBJ_FILES)

$(EXECUTABLE): $(LIBRARY) $(MAIN_CODE)
	$(CC) $(MAIN_CODE) $(LIBRARY_ABBR_FLAG) $(LIBRARY_FLAG) $(INCLUDE_FLAG) -o $(EXECUTABLE)

clean:
	rm $(OBJ_FILES)
