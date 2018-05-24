#ifndef _BUILDER_H_
#define _BUILDER_H_

class Builder {

  public:
    Builder();
    void build();

  private:
    static char* directoryTree[];

    void generateDirectoryTree();

};

#endif
