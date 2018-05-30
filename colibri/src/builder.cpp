// Colibri libraries
#include "../include/core.h"
#include "../include/builder.h"

// Poco libraries
#include "Poco/Path.h"
#include "Poco/File.h"

// C++ libraries
#include <stdio.h>
#include <string.h>
#include <vector>
using namespace Colibri;

// GLOBAL VARIABLES
  Core core;

  std::vector <std::string> directoriesToMove;
  std::vector <std::string> directoryTree;
  std::vector <std::string> :: iterator i;


// PUBLIC FUNCTIONS
  Builder::Builder(int argc, char* options[]) {

    // GET PARAMETERS
    for (int i = 2; i < argc; i++) {
      if (strncmp(options[i], "--verbose", 9) == 0) {
        core.enableLog(true);
      }
    }

    // INITIALIZE DIRECTORY TREES
    directoriesToMove.push_back("assets/images");
    directoriesToMove.push_back("assets/fonts");
    directoriesToMove.push_back("vendor");

    directoryTree.push_back("dist");
    directoryTree.push_back("dist/assets");
    directoryTree.push_back("dist/assets/fonts");
    directoryTree.push_back("dist/assets/images");
    directoryTree.push_back("dist/assets/scripts");
    directoryTree.push_back("dist/assets/styles");
    directoryTree.push_back("dist/templates");
    directoryTree.push_back("dist/vendor");

  }

  void Builder::build() {
    printf ("Building project...\n");

    Builder::generateDirectoryTree();
    Builder::moveVendorDirectoryTree();

    printf("Project was built!\n");
  }

// PRIVATE FUNCTIONS
  void Builder::generateDirectoryTree() {

    Poco::Path path(false);
    std::string str;
    bool created = false;
    int j = 0;

    for (i = directoryTree.begin(), j = 0; i != directoryTree.end(); ++i, j++) {
      path.pushDirectory(directoryTree.at(j));
      str = path.toString();

      Poco::File file(path);
      
      if (file.exists()) {
        printf("Erasing current folder.\n");
        file.remove(true);
        if (file.exists()) {
          printf("It wasn't possible to erase folder.\n");
        }
      }

      file.createDirectories();
      
      if (file.exists()) {
        core.log("    [+] Directory '%s' was created.\n", (directoryTree.at(j)).c_str());
      } else {
        core.log("\t[-] Directory '%s' wasn't created.\n", (directoryTree.at(j)).c_str());
      }
      
      path.clear();
    }
    printf("Folder generated successfully.\n");

  }

  void Builder::moveVendorDirectoryTree() {



  }