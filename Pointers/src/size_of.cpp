#include <iostream>
using namespace std;

int main() {

  cout << "This is the table of data type's size" << "\n"
       << "int: " << sizeof (int) << "B\n"
       << "unsigned int: " << sizeof (unsigned int) << "B\n"
       << "float: " << sizeof (float) << "B\n"
       << "double: " << sizeof (double) << "B\n"
       << "long double: " << sizeof (long double) << "B\n"
       << "long: " << sizeof (long) << "B\n"
       << "unsigned long: " << sizeof (unsigned long) << "B\n"
       << "short: " << sizeof (short) << "B\n"
       << "unsigned short: " << sizeof (unsigned short) << "B\n"
       << "char: " << sizeof (char) << "B\n"
       << "signed char: " << sizeof (signed char) << "B\n"
       << "unsigned char: " << sizeof (unsigned char) << "B\n";

  return 0;
}
