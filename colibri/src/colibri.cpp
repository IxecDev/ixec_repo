#include <iostream>
#include <string.h>

#include "../include/builder.h"
#include "../include/generator.h"
using namespace std;

// Declaration of functions
void printHelp();


// Main function
int main(int argc, char* argv[]) {

  Builder builder;
  Generator generator;
  Manager manager;

  // CHECK IF THERE ARE ARGUMENTS
  if (argc == 1) {
    printHelp();
    return -1;
  }

  cout << "Number of parameters: " << argc << "\n";

  if (strncmp(argv[1], "build", 5) == 0) {

    builder.build();

  } else if (strncmp(argv[1], "help", 4) == 0) {

    printHelp();

  } else if (strncmp(argv[1], "generate", 9) == 0) {

    if (strncmp(argv[2], "component", 9) == 0) {
      generator.createComponent(argv[3]);
    }

  } else if (strncmp(argv[1], "new", 3) == 0) {

    if (argc >= 3) {
      manager.createNewProject(argv[2]);
    }

  } else {

    cout << "Error: Bad parameter [" << argv[1] << "]\n";
    printHelp();

  }

  return 0;

} 


// Definition of functions
void printHelp() {
  cout << "\ncolibri:\n\n"
         << "    build\t\t\t\tBuilds the entire project\n"
         << "    generate <component|directive|service|template>\n\t\t\t\t\tGenerate the thing you choose\n"
         << "    help\t\t\t\tShows this help\n"
         << "    new <project_name>\t\t\tCreate a project with the <project_name> written\n\n";
}
