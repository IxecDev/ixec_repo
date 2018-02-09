#include <iostream>
#include <bitset>
using namespace std;

int main () {

  signed short short_val = -1;
  bitset<8> bitset1(short_val);

  cout << bitset1 << "\n";

  signed short short_val1 = short_val >> 1;
  bitset<8> bitset2(short_val1);

  cout << short_val1 << " " << bitset2 << "\n";

  return 0;
}
