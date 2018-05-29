#ifndef _CORE_H
#define _CORE_H

namespace Colibri {

  class Core {

    public:
      Core();

      void printHelp();
      void log(char *message...);
      void enableLog(bool able);

    private:
      bool logAllowed;

  };

}

#endif