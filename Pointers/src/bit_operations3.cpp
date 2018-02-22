#include <iostream>

int main() {

  int a = 1;
  std::cout << "Printing 'a': " << &a << std::endl;

  int a = 2;
  std::cout << "Printing 'a': " << &a << std::endl;

  int a = 3;
  std::cout << "Printing 'a': " << &a << std::endl;

  return 0;
}
