#include "../include/core.h"
#include <stdio.h>
#include <cstdarg>

// PUBLIC
  Colibri::Core::Core() {
    Core::logAllowed = false;
  }

  void Colibri::Core::printHelp() {
    printf("\ncolibri:\n\n");
    printf("    build\t\t\t\tBuilds the entire project\n");
    printf("    generate <component|directive|service|template>\n\t\t\t\t\tGenerate the thing you choose\n");
    printf("    help\t\t\t\tShows this help\n");
    printf("    new <project_name>\t\t\tCreate a project with the <project_name> written\n\n");
  }

  void Colibri::Core::log(char *message...) {
    if (!Core::logAllowed) return;

    va_list args;
    va_start (args, message);
    vprintf (message, args);
    va_end (args);
  }

  void Colibri::Core::enableLog(bool able) {
    Core::logAllowed = able;
  }

// PRIVATE