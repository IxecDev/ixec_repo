#include "../include/manager.h"
#include <stdio.h>

// PUBLIC: DECLARATIONS
  Manager::Manager() {

  }

  void Manager::createNewProject(char* name) {
    printf("Creating project %s...\n", name);
  }
