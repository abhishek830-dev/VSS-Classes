#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cout << " Enter the value of n: ";
    cin >> n;

    for (int i=1; i<=n; i++) {                 // row loop
        for (int j=n-i; j>=1; j--) {           // Space loop 
            cout << " ";
        }
        for (int j=1; j<=2*i-1; j++) {         // space star printing loop
            if (j == 1 || j == 2*i-1 || i == n) {
                cout << "*";
            }
            else {
                cout << " ";
            }

        }
        cout << endl;

    }
};
