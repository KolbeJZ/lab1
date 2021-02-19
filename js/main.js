function fib(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        for(var i = n; i >= 1; i--){
            answer = answer * i;
        }
        return answer;
    }
}