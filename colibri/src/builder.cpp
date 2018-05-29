#include "../include/core.h"
#include "../include/builder.h"
#include <stdio.h>
#include <string.h>
#include <fstream>
#include <dirent.h>
#include <sys/stat.h>
using namespace Colibri;

// GLOBAL STRUCTURES
  struct dirent *drnt;
  struct stat s;

// GLOBAL VARIABLES
  Core core;

// PUBLIC FUNCTIONS
  Builder::Builder(char* options[]) {

    // GET PARAMETERS
    for (int i = 2; options[i] != NULL; i++) {
      if (strncmp(options [i], "--verbose", 9) == 0) {
        core.enableLog(true);
      }
    }

  }

  void Builder::build() {
    printf ("Generating folder structure...\n");

    Builder::generateDirectoryTree ();
    Builder::moveVendorDirectoryTree ();

    printf("Folder generated successfully\n");
  }

// PRIVATE FUNCTIONS
  char* Builder::directoriesToMove[] = {
    "assets/images",
    "assets/fonts",
    "vendor"
  };

  char* Builder::directoryTree[] = {
    "dist",
    "dist/assets",
    "dist/assets/fonts",
    "dist/assets/images",
    "dist/assets/scripts",
    "dist/assets/styles",
    "dist/templates",
    "dist/vendor"
  };

  void Builder::generateDirectoryTree() {

    for (int i = 0; Builder::directoryTree[i] != NULL; i++) {
      DIR *dir = NULL;
      dir = opendir (Builder::directoryTree[i]);

      if (dir == NULL) {
        if (mkdir (Builder::directoryTree[i], S_IRWXU) == 0) {
          core.log ("\t[+] Directory '%s' was created\n", i, Builder::directoryTree[i]);
        } else {
          core.log ("\t[-] Could not create directory: '%s'\n", i, Builder::directoryTree[i]);
        }
      } else {
        closedir (dir);
        core.log ("    [x] Directory '%s' already exists!\n", Builder::directoryTree[i]);
      }
    }

  }

  void Builder::moveVendorDirectoryTree() {

    DIR *dir = NULL;

    core.log("\nMoving files and directories...\n");

    for (int i = 0; Builder::directoriesToMove[i] != NULL; i++) {
      dir = opendir (Builder::directoriesToMove[i]);
      if (dir == NULL) {
        core.log ("    Directory '%s' doesn't not exist.\n", Builder::directoriesToMove[i]);
      } else {
        while (drnt = readdir (dir)) {
          if (drnt == NULL) {
            core.log("Error: Directory '%s' is unaccessible.\n", Builder::directoriesToMove[i]);
            exit(3);
          } else {
            if ((strncmp(drnt->d_name, ".", 1) != 0) &&
                (strncmp(drnt->d_name, "..", 2) != 0)) {
              core.log("    [.] Moving directory/file '%s'\n", drnt->d_name);

            }
          }
        }
        closedir (dir);
      }
    }

  }