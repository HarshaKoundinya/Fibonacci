#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector <long long> v;
long long fibo (int n, vector<long long>& v){
    if(n < 0)return 0;
    if (n==0)return 1;
    else return fibo(n-1, v)+fibo(n-2, v) + fibo(n-4, v) + fibo(n-6, v);
}

int main (){
    int n;
    cout << "Enter the value for n : ";
    cin>>n;
    long long res = fibo(n, v);
    cout<<"nth fibonacci term is : "<<res<<endl;
    return 0;
}