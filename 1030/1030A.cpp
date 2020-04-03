#include <bits/stdc++.h>
using namespace std;

int main() {
	short tests;
	cin >> tests;
	short inc = 0;
	
	for(short t = 0; t < tests; t++) { 
		short a;
		cin >> a;
		inc += a;
	}
	cout << (inc > 0 ? "HARD" : "EASY") << endl;
}