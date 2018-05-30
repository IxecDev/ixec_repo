#ifndef _BUILDER_H_
#define _BUILDER_H_

class Builder {

  public:
    Builder(int, char**);

    void build();
    void setVerbose(bool);

  private:
    void generateDirectoryTree();
    void moveVendorDirectoryTree();

};

#endif
