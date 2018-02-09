// Shows a little example of how pointers work when there's a simple
// assignation.
// Example:
//      i = 5
//      ptr = &i;
//      cout << "The value of ptr is " << *ptr;

#include <iostream>
using namespace std;

int arr[] = {100, 34, 22, 35, 6, 89};
int *ptr;

int main()
{

    int i = 1;
    int j = 10;
    int *ptr;

    ptr = &i;

    cout << "i    -> " << i << "\n"
         << "&i   -> " << &i << "\n"
         << "ptr  -> " << ptr << "\n"
         << "*ptr -> " << *ptr << "\n"
         << "&ptr -> " << &ptr << "\n\n";

    i = 5;

    cout << "i    -> " << i << "\n"
         << "&i   -> " << &i << "\n"
         << "ptr  -> " << ptr << "\n"
         << "*ptr -> " << *ptr << "\n"
         << "&ptr -> " << &ptr << "\n\n";

    *ptr = j;

    cout << "j    -> " << j << "\n"
         << "&j   -> " << &j << "\n"
         << "ptr  -> " << ptr << "\n"
         << "*ptr -> " << *ptr << "\n"
         << "&ptr -> " << &ptr << "\n\n";

    cout << "The size of pointer ptr is: "  << sizeof ptr << "\n\n";

    return 0;
}
