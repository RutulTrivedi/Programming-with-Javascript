num = parseInt(prompt("Enter the number : "));

for(i=num;i>0;i--){
    for(j=0;j<i;j++){
        document.write("* ");
    }
    document.write("<br/>");
}