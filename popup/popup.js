const btn = document.getElementById("test");

btn.addEventListener("click",async ()=>{
  const [tab] = await chrome.tabs.query({active:true, currentWindow:true});
  chrome.scripting.executeScript({
      target:{tabId:tab.id},
      func:()=>{
        var viewMoreButton = document.getElementsByClassName("view-more")[0]

        if(viewMoreButton && viewMoreButton?.getAttribute("style")!='display: none;' && !viewMoreButton?.childNodes[0]?.textContent.includes("View Next 0 Products")){
            viewMoreButton.click()
        }

        var interval = setInterval(()=>{
            viewMoreButton = document.getElementsByClassName("view-more")[0]

            if(viewMoreButton && viewMoreButton?.getAttribute("style")!='display: none;' && !viewMoreButton?.childNodes[0]?.textContent.includes("View Next 0 Products")){
                viewMoreButton.click()
            }
            else{
                var names = document.getElementsByClassName("product-name")
                var list=[];
        
                Array.prototype.forEach.call(names, child => {
                if(child.nodeName=='A' && child.textContent.includes("Exp")){
                    list.push(child.parentNode.parentNode.parentNode)
                }
                });
        
                var container = document.getElementsByClassName("grid-products-wrapper")[0]
                container.innerHTML=""

                list.forEach(el=>{
                    container.appendChild(el)
                })

                clearInterval(interval)
            }
        },1000)
    }
  })
})