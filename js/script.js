console.log("Linked Xtra Script"),function(){void 0==localStorage.lix_installDate&&(localStorage.lix_installDate=Date.now());const t=".mn-invitation-manager__artdeco-card .mn-filters-toolbar",e=".msg-messaging-container",n=".search-results-container";var i;function a(t){console.log("Group Invitation dialog detected");var e=new d,n=$("\n\t\t\t<span>\n\t\t\t\tAuto invite count: \n\t\t\t</span>\n\t\t"),i=$('\n\t\t\t<input type="number" class="" value="500">\n\t\t').css({width:"70px",marginRight:"10px"}),a=c("secondary","Auto invite"),s=c("secondary","Stop").hide();a.click(function(){l(a,s),e.start({count:i.val()}),e.onCompleted=function(){l(a,s)}}),s.click(function(){e.stop(),l(a,s)}),n.append(i,a,s),$(t).prepend(n)}function s(t){var e=new URL(location.href),n=$("<div/>").css({marginTop:"12px"});if(/invitation-manager\/?$/.test(e.pathname)){var i=new u,a=c("primary","Accept all"),s=c("secondary","Stop").hide();a.click(function(){l(a,s),i.start(),i.onCompleted=function(){l(a,s)}}),s.click(function(){i.stop(),l(a,s)}),n.append(a,s)}else{i=new p,a=c("primary","Withdraw all"),s=c("secondary","Stop").hide();n.append(a,s),a.click(function(){l(a,s),i.start(),i.onCompleted=function(){l(a,s)}}),s.click(function(){i.stop(),l(a,s)})}$(t).append(n)}function o(t){i.add(".msg-bulk-actions-panel",function(t){var e,n=new m,i=(e="checkbox-"+Date.now(),$(`\n\t\t\t<div title="This feature is added by 'Linkedin Xtra'">\n\t\t\t    <input tabindex="-1" id="${e}" class="ember-checkbox msg-selectable-entity__input simple-form ember-view" type="checkbox">\n\t\t\t    <label class="msg-selectable-entity__checkbox-label ml2" aria-label="Unselect conversation" for="${e}">\n\t\t\t    </label>\n\t\t\t</div>\n\t\t`)).addClass("display-flex mvA").css({marginLeft:"15px",color:"red"}),a=c("secondary","Stop").addClass("display-flex mvA").css({marginLeft:"15px"});$(t).prepend(i),i.click(function(){n.start(),$(t).prepend(a),i.detach()}),a.click(function(){n.stop(),$(t).prepend(i),a.detach()})})}function l(){[...arguments].forEach(t=>{t.toggle()})}$(document).ready(function(){(i=new class{constructor(){this.listeners=[]}add(t,e,n){this.listeners.push({selector:t,func:e,once:n})}watch(){var t=this,e=new MutationObserver(e=>{for(let i of e)for(let e of[...i.addedNodes]){var n=[];for(let i in t.listeners){let a=t.listeners[i];$(e).is(a.selector)&&(a.func(e),a.once&&n.push(i))}_.pullAt(t.listeners,n)}});e.observe(document.querySelector("body"),{subtree:!0,childList:!0})}}).watch();var l,r,d,u,p,m=document.querySelector(t),v=document.querySelector(e),y=document.querySelector(n);m&&s(m),v&&o(v),y&&(l=y,d=new h,u=c("primary","Connect All"),c("secondary","Stop"),p=$('\n\t\t\t<div>\n\t\t\t\t\x3c!-- <textarea class="mb3" placeholder="Enter invitation message template. Use [FIRST_NAME] for personalization." id="lix-messageTemplate" rows="5"></textarea> --\x3e\n\t\t\t\t<div class="mb3">Randomize delay (in seconds) between connection requests:</div>\n\t\t\t\t<div class="display-flex mb3">\n\t   \t\t\t\t<div class="mr1"> Min delay: </div>\n\t\t\t\t\t<input placeholder="Min. delay" id="lix-delay1" type="number" class="flex-1 mr1" value="1">\n\t\t\t\t\t<div class="mr1"> Max delay: </div>\n\t\t\t\t\t<input placeholder="Max. delay" id="lix-delay2" type="number" class="flex-1" value="5">\n\t\t\t\t</div>\n\t\t\t\t<div class="display-flex">\n\t\t\t\t\t<div class="mr1"> Limit number of requests to: </div>\n\t\t\t\t\t<input placeholder="Limit" id="lix-limit" type="number" class="flex-1" value="20">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'),u.click(function(){var t=c("primary","Start");r=createDialog("Auto connect settings",p,[t]),t.click(function(){r.remove(),d.start({message:p.find("#lix-messageTemplate").val(),delay1:Number(p.find("#lix-delay1").val()),delay2:Number(p.find("#lix-delay2").val()),limit:Number(p.find("#lix-limit").val())})})}),$(l).find("section.is-header-zone").append(u)),i.add(t,s),i.add(".invitee-picker__modal .invitee-picker__footer > div",a),i.add(e,o)});function c(t,e,n={marginRight:"12px"}){return $(`\n\t\t\t<button title="This feature is added by 'Linkedin Xtra'" class="artdeco-button artdeco-button--${t} ember-view">\n\t\t\t\t<span class="artdeco-button__text">\n\t\t\t\t \t${e}\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t`).css(n)}class r{constructor(t={}){Object.assign(this,t),this.running=!1,this.onCompleted=function(){}}start(t){Object.assign(this,t),this.running=!0,this.counter=0,this.loop()}stop(t){this.running=!1,t&&this.onCompleted()}next(){this.counter++,this.running&&this.loop()}}class d extends r{constructor(){super(),this.counter=0}async loop(){var t=document.querySelector(".artdeco-modal__actionbar .artdeco-button--primary"),e=document.querySelector(".invitee-picker__results-container");this.counter+=Array.from(document.querySelectorAll(".invitee-picker__result-item")).filter(t=>{if(!t.querySelector(".visibility-hidden")&&!t.querySelector("input").checked)return t.click(),!0}).length,!this.count||this.counter<this.count?(e.scrollTop=e.scrollHeight,await wait(2),this.next()):(t.click(),this.stop(!0))}}class u extends r{constructor(){super()}async loop(){var t=document.querySelector(".artdeco-list .artdeco-button--secondary");t?(t.click(),await wait(.2),this.next()):this.stop(!0)}}class p extends r{constructor(){super()}start(){super.start(),this.styleTag=$("\n\t\t\t\t<style>\n\t\t\t\t\t#artdeco-modal-outlet {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t"),$("head").append(this.styleTag)}stop(){super.stop(),this.styleTag.remove()}async loop(){this.counter>=3&&(this.counter=0);var t=document.querySelectorAll(".mn-invitation-list li button")[this.counter],e=document.querySelectorAll(".mn-invitation-list li .invitation-card__title")[this.counter];if(t)console.log("Withdrawing",e.innerText),t.click(),await wait(0),document.querySelector(".artdeco-modal__actionbar--confirm-dialog button:nth-child(2)").click(),await wait(.5),this.next();else{var n=document.querySelector(".mn-invitation-pagination button");!n||n.disabled?this.stop(!0):(i.add(".mn-invitation-list li",()=>{this.next()},!0),n.click())}}}class m extends r{async loop(){$(".msg-conversations-container__conversations-list .msg-selectable-entity__input").each((t,e)=>{e.checked||e.parentElement.click()}),await wait(1);var t=$(".msg-conversations-container__conversations-list")[0];t.scrollTop=t.scrollHeight,await wait(2),this.next()}}class h extends r{constructor(){super()}start(t){this.total=0,super.start(t)}stop(){super.stop()}async loop(){try{if(this.total>this.limit)return;var t=$("li.search-result button:not(.message-anywhere-button):not(:disabled)");if(t.length){var e=t[0],n=$(e).closest("li.search-result").find(".actor-name").text();if(console.log("Sending connection request to",n),e.click(),await wait(1),this.message&&($(".artdeco-modal__actionbar button:nth-child(1)").click(),await wait(1),$("#custom-message").val(this.message.replace(/\[FIRST_NAME\]/,n.split(" ")[0])),$("#custom-message").blur(),await wait(1),$(".artdeco-modal__actionbar button").click()),$("#email").length)return e.remove(),this.next();$(".artdeco-modal__actionbar button:nth-child(2)").click(),await wait(Rand(this.delay1,this.delay2)),this.total++,this.next()}else{var a=document.querySelector(".artdeco-pagination__button--next:not(:disabled)");!a||a.disabled?this.stop(!0):(i.add(".search-results__list li:first-child",async()=>{await waitUntil(()=>!$(".search-is-loading").length),await waitUntil(()=>$("li.search-result button:not(.message-anywhere-button):not(:disabled)").length,.5,5),this.loop()},!0),a.click())}}catch(t){this.next()}}}}();