function searchValue() {
    let input = document.getElementById("insertvalue");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("resultlist");
    let li = ul.getElementsByTagName("li");
    if(filter.length>1){
        for (let i = 0; i < li.length; i++) {
                let a = li[i].getElementsByTagName("span")[0];
                let txtValue = a.textContent || a.innerText;
                
                if (txtValue.toUpperCase().indexOf(filter) != -1) {
                    li[i].style.color="yellow";
                    li[i].style.display = "";
                    document.getElementById("datalist").style.visibility="visible";
                } else {
                   li[i].style.display = "none";
                }
        }       
    }
}
