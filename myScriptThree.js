num = parseInt(prompt("Enter the number : "));
k=1;
for(i=0;i<=num;i++){
    for(j=0;j<i;j++){
        document.write(k+" ");
        k++;
    }
    document.write("<br/>");
}