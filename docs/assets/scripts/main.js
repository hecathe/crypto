const activeClass="active",tabIdList=document.querySelectorAll("[data-tab-id]");if(tabIdList){let e=new Set;for(const b of tabIdList)e.add(b.dataset.tabId);function tabSwith(e,t,a){for(const s of t.controlList)s.classList.remove(activeClass);for(const l of t.blockList)l.style.display="none";document.querySelector(`[data-tab-id="${a}"][data-tab-control="${e}"]`).classList.add(activeClass),document.querySelector(`[data-tab-id="${a}"][data-tab-block="${e}"]`).style.display=""}for(const h of e){const i={controlList:document.querySelectorAll(`[data-tab-id="${h}"][data-tab-control]`),blockList:document.querySelectorAll(`[data-tab-id="${h}"][data-tab-block]`)};console.log(i),tabSwith(i.controlList[0].dataset.tabControl,i,h);for(const j of i.controlList)j.addEventListener("click",()=>{tabSwith(j.dataset.tabControl,i,h)})}}svg4everybody({polyfill:!0});const mailingForm=document.querySelector('[data-form="mailing"]'),emailField=mailingForm.querySelector('input[type="email"]'),submitButton=mailingForm.querySelector('[type="submit"]'),responseText=document.querySelector(".form-mailing__response"),re=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function showResponse(e){responseText.style.display="block",responseText.innerHTML=e}emailField.addEventListener("input",function(){""!=emailField.value?0==emailField.value.search(re)?(showResponse("Верный формат E-mail :)"),emailField.parentElement.classList.remove("error"),emailField.parentElement.classList.add("success"),submitButton.classList.remove("disabled")):(showResponse("Неверный формат E-mail"),emailField.parentElement.classList.add("error"),emailField.parentElement.classList.remove("success"),submitButton.classList.add("disabled")):(responseText.style.display="none",emailField.parentElement.classList.remove("error"),emailField.parentElement.classList.remove("success"))}),mailingForm.addEventListener("submit",function(e){!emailField.parentElement.classList.contains("error")&&""!=emailValue||e.preventDefault()});