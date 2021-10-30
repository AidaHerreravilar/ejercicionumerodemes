let mes:number=document.getElementById("numerodemes");
let btn=document.getElementById("btn");
btn?.addEventListener("click", ()=>{
  let mes2=Number(mes.value);
  let diasve:= 2;
  let diast:= 4,6,9,11;
  let diastr:= 1,3,5,7,8,10,12;


  switch (true) {
    case (mes2===diasve):
      console.log("tiene 28 dias");
      break;
      case (mes2===diast):
          console.log("tiene 30 dias");
          break;
          case (mes2===diastr):
          console.log("tiene 31 dias");
          break;
  
    default:
      break;
  }
} 

//ejercicio dos


                                                                                                                                                                                                                                                                                  