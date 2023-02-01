document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.

  // const button1 = document.getElementById("test");
  
  // // in this way we could apply styles to the same elements with the same class name
  // var arr = Array.from(document.getElementsByClassName("post-msg"));
  // const title = document.getElementById("unique");

  // button1.addEventListener("click",function(){
  //  title.style.fontSize="100px";
  //  arr.forEach((i)=>{
  //   i.style.backgroundColor= "rgb(100, 100, 100)";
  // })
  // })

  const menuButton = document.getElementById("menu");
  //class always return an array, so needs to specifiy the index, or use forEach.
  const menuAppear = document.getElementsByClassName("mobile-nav")[0]


  menuButton.addEventListener("click",function(){

    if(!menuAppear.classList.contains("appear")) {
       menuAppear.classList.remove("mobile-nav");
       menuAppear.classList.add("appear");
      
      } else {
        menuAppear.classList.remove("appear");
        menuAppear.classList.add("mobile-nav");
      }
    });

    // create a main tag that wraps everything except the nav bar
    const main = document.getElementsByTagName("main")[0];
    main.addEventListener("click", function(){
        if(menuAppear.classList.contains("appear")){
          menuAppear.classList.remove("appear");
          menuAppear.classList.add("mobile-nav");
        }
      });

      const escapeButton = document.getElementById("escape-button");
      escapeButton.addEventListener("click", function(){
          if(menuAppear.classList.contains("appear")){
            menuAppear.classList.remove("appear");
            menuAppear.classList.add("mobile-nav");
          }
        });
});

  //for some reasons, display does not work
     //if(menuAppear.style.display === "none") {
     //  menuAppear.style.display="block";
     //} else {
     //   menuAppear.style.display="none";
  
  //}