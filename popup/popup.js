const btn = document.getElementById("test");

btn.addEventListener("click",async ()=>{
  const [tab] = await chrome.tabs.query({active:true, currentWindow:true});
  chrome.scripting.executeScript({
      target:{tabId:tab.id},
      func:()=>{

        var viewMoreButton = document.getElementsByClassName("view-more")[0]

        if(viewMoreButton.getAttribute("style")!='display: none;'){
            viewMoreButton.click()
        }

        var interval = setInterval(()=>{
            viewMoreButton = document.getElementsByClassName("view-more")[0]
        
            if(viewMoreButton.getAttribute("style")!='display: none;'){
                viewMoreButton.click()
            }
            else{
                var ankers = document.getElementsByClassName("image-wrap box-image")

                Array.prototype.forEach.call(ankers, child => {
                    if(child.getAttribute("title").includes("(Exp"))
                    child.parentNode.parentNode.remove()
                  });

                clearInterval(interval)
            }
        },1000)



        //   console.log(viewMoreButton)
          const res = 1;
          return res;
      }
  }).then((result)=>{
    //   result[0].result; //
  })
})

function getExpiredProducts(){
    var ankers = document.getElementsByClassName("image-wrap box-image")
    console.log(ankers)
}
