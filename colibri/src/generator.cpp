#include "../include/generator.h"
#include <stdio.h>

// PUBLIC: DECLARATIONS
  Generator::Generator() {

  }

  void Generator::createComponent(char* name) {
    printf("Creating component %s...\n", name);
  }
