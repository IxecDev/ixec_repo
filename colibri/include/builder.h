#ifndef _BUILDER_H_
#define _BUILDER_H_

class Builder {

  public:
    Builder(char* options[]);

    void build();
    void setVerbose(bool);

  private:
    static char* directoriesToMove[];
    static char* directoryTree[];

    void generateDirectoryTree();
    void moveVendorDirectoryTree();

};

#endif
