#include <bits/stdc++.h>
using namespace std;

int main() {
	int tests;
	cin >> tests;
	
	for(int t = 0; t < tests; t++) { 
		int a, b;
		cin >> a >> b;
		if (a % b == 0) {
			cout << 0 << endl;
		} else {
			cout << b - a % b << endl;
		}
	}
}