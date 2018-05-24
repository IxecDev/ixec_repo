#include "../include/builder.h"
#include <stdio.h>
#include <string.h>
#include <fstream>

// PUBLIC FUNCTIONS
  Builder::Builder() {

  }

  void Builder::build() {
    Builder::generateDirectoryTree();
  }

// PRIVATE FUNCTIONS
  char* Builder::directoryTree[] = {
    "dist",
    "dist/assets",
    "dist/assets/css",
    "dist/assets/fonts",
    "dist/assets/img",
    "dist/assets/js",
    "dist/templates",
    "dist/vendor"
  };

  void Builder::generateDirectoryTree() {
    printf("Generating folder structure...\n");
    
    for (var i = 0; i < sizeof(directoryTree); i++) {
      
    }

    printf("Directory: %s\n", Builder::directoryTree[0]);
  }

