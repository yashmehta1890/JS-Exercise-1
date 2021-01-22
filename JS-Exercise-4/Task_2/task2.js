  //Check button value
  function checkValue(no) {
   let val = document.getElementById("btn").value;
   if(val=="Add"){
     addRow();
   }
   else{
     updateRow(no);
   }
  }
 
  // check empty input
  function checkEmptyInput()
  {
      let isEmpty = false;
      let fname = document.getElementById("fname").value;
      let lname = document.getElementById("lname").value;

      if(fname === ""){
          alert("Enter first name");
          isEmpty = true;
      }
      else if(lname === ""){
          alert("Enter last name");
          isEmpty = true;
      }
      return isEmpty;
  }

  //Add Row
  function addRow()
  {    
   if(!checkEmptyInput()){
     let first_name=document.getElementById("fname").value;
     let last_name=document.getElementById("lname").value;

     let table=document.getElementById("data_table");
     let table_len=table.rows.length;
     let row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='fname_col"+table_len+"'><input type='text' id='fname_val"+table_len+"' value='"+first_name+"' disabled></td><td id='lname_col"+table_len+"'><input type='text' id='lname_val"+table_len+"' value='"+last_name+"' disabled></td><td><input type='button' value='Edit' id='edit_button"+table_len+"' onclick='edit_row("+table_len+")' style='background-color:green;'><input type='button' value='Delete' id='delete_button"+table_len+"' onclick='delete_row("+table_len+")' style='background-color:red;'></td></tr>";
     document.getElementById("fname").value="";
     document.getElementById("lname").value="";
   }
  }
      
  //Delete single row
  function delete_row(no)
  {
   document.getElementById("row"+no+"").outerHTML="";
  }

  // display selected row data into input text
  let number;
  function edit_row(no)
  {
    document.getElementById("fname").value = document.getElementById("fname_val"+no+"").value;
    document.getElementById("lname").value = document.getElementById("lname_val"+no+"").value;
    document.getElementById("btn").value = "Update";
    number=no;              
  }

  //Update row
  function updateRow(number)
  {
    if(!checkEmptyInput()){
         document.getElementById("fname_val"+number+"").value = document.getElementById("fname").value;
         document.getElementById("lname_val"+number+"").value = document.getElementById("lname").value;
         document.getElementById("fname").value="";
         document.getElementById("lname").value="";
        document.getElementById("btn").value = "Add";
     }
  }  