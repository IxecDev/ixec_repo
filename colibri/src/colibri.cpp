#include <iostream>
#include <string.h>

#include "../include/core.h"
#include "../include/builder.h"
#include "../include/generator.h"
#include "../include/manager.h"
using namespace std;
using namespace Colibri;


// Main function
int main(int argc, char* argv[]) {

  Core core;
  char response;
  
  // CHECK IF THERE ARE ARGUMENTS
  if (argc == 1) {
    core.printHelp();
    return -1;
  }

  cout << "Number of parameters: " << argc << "\n";

  if (strncmp(argv[1], "build", 5) == 0) {

    cout << "Do you really want to build your project (Y/n)? This action will erase current built project if this exists\n> ";
    cin >> response;

    if (response == 'Y' || response == 'y') {
      Builder builder(argc, argv);
      builder.build();
    }

  } else if (strncmp(argv[1], "help", 4) == 0) {

    core.printHelp();

  } else if (strncmp(argv[1], "generate", 9) == 0) {

    Generator generator;

    if (strncmp(argv[2], "component", 9) == 0) {
      generator.createComponent(argv[3]);
    }

  } else if (strncmp(argv[1], "new", 3) == 0) {

    if (argc >= 3) {
      Manager manager;
      manager.createNewProject(argv[2]);
    } else {
      cout << "You must specify a name of project.\n";
    }

  } else {

    cout << "Error: Bad parameter [" << argv[1] << "]\n";
    core.printHelp();

  }

  return 0;

}