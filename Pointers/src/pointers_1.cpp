// This program shows how a pointer can point to other pointer
// and shows how a pointer is allocated in memory.

#include <iostream>
using namespace std;

int main()
{

    int i = 5;
    int *ptr;
    int **ptr_to_ptr;

    ptr = &i;

    cout << "Pointer (ptr) is equal to i, then it's equal to " << *ptr << "\n"
         << "The location of memory of pointer is " << &ptr << ".\n"
         << "Now we're going to assign the location memory of ptr to ptr_to_ptr\n\n";

    ptr_to_ptr = &ptr;

    cout << "ptr_to_ptr now contains the location of ptr. It is " << ptr_to_ptr << "\n"
         << "Check if it works -> " << &(ptr_to_ptr + 1) << "\n";

    return 0;
}
