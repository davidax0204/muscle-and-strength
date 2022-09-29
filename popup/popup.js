const btn = document.getElementById("test");



btn.addEventListener("click",async ()=>{
  const [tab] = await chrome.tabs.query({active:true, currentWindow:true});
  chrome.scripting.executeScript({
      target:{tabId:tab.id},
      func:()=>{
          console.log('working')
          const res = 1;
          return res;
      }
  }).then((result)=>{
      result[0].result; // = 1
  })
})