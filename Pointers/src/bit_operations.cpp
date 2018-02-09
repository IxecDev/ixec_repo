#include <iostream>
#include <bitset>
using namespace std;

int main () {

  unsigned short short_val = 4;
  bitset<8> bitset1(short_val);

  cout << bitset1 << "\n";

  unsigned short short_val1 = short_val << 1;
  bitset<8> bitset2(short_val1);

  cout << bitset2 << "\n";

  return 0;
}
