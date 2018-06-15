
/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/
$(function(){(function(e){function t(t){this.input=t;if(t.attr("type")=="password"){this.handlePassword()}e(t[0].form).submit(function(){if(t.hasClass("placeholder")&&t[0].value==t.attr("placeholder")){t[0].value=""}})}t.prototype={show:function(e){if(this.input[0].value===""||e&&this.valueIsPlaceholder()){if(this.isPassword){try{this.input[0].setAttribute("type","text")}catch(t){this.input.before(this.fakePassword.show()).hide()}}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")){this.input.removeClass("placeholder");this.input[0].value="";if(this.isPassword){try{this.input[0].setAttribute("type","password")}catch(e){}this.input.show();this.input[0].focus()}}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var t=this.input;t.attr("realType","password");this.isPassword=true;if(e.browser.msie&&t[0].outerHTML){var n=e(t[0].outerHTML.replace(/type=(['"])?password\1/gi,"type=$1text$1"));this.fakePassword=n.val(t.attr("placeholder")).addClass("placeholder").focus(function(){t.trigger("focus");e(this).hide()});e(t[0].form).submit(function(){n.remove();t.show()})}}};var n=!!("placeholder"in document.createElement("input"));e.fn.placeholder=function(){return n?this:this.each(function(){var n=e(this);var r=new t(n);r.show(true);n.focus(function(){r.hide()});n.blur(function(){r.show(false)});if(e.browser.msie){e(window).load(function(){if(n.val()){n.removeClass("placeholder")}r.show(true)});n.focus(function(){if(this.value==""){var e=this.createTextRange();e.collapse(true);e.moveStart("character",0);e.select()}})}})}})(jQuery)});

/*! jQuery UI - v1.10.4 - 2014-02-20
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);

//-- jq-clipthru --//
(function(){(function(e){return e.widget("salsita.clipthru",{options:{method:["clip","clip-path"],dataAttribute:"jq-clipthru",simpleMode:false,collisionTarget:null,cloneOnCollision:false,keepClonesInHTML:false,removeAttrOnClone:["id"],blockSource:null,updateOnScroll:true,updateOnResize:true,updateOnZoom:true,updateOnCSSTransitionEnd:false,autoUpdate:false,autoUpdateInterval:100,broadcastEvents:true,debug:false},_create:function(){this.overlayOffset=null;if(this.options.collisionTarget){this.collisionTarget=e(this.element.find(this.options.collisionTarget).get(0))}else{this.collisionTarget=this.element}this.collisionTargetOffset=null;this.allBlocks=null;this.allClones=null;this.collidingBlocks=[];return this._initWidget()},_initWidget:function(){var e;e=this;this._getAllBlocks();if(this.allBlocks.length>0){this._logMessage(""+this.allBlocks.length+" blocks found",this.allBlocks);this.collisionTarget.addClass(""+this.options.dataAttribute+"-origin");this._addIdToBlocks();this._attachListeners();this._createOverlayClones();this.refresh();clearInterval(this.autoUpdateTimer!=null);if(this.options.autoUpdate){return this.autoUpdateTimer=setInterval(function(){return e.refresh()},this.options.autoUpdateInterval)}}else{return this._logMessage("no blocks found")}},_triggerEvent:function(e,t){this.element.trigger(e,[t]);return this._logMessage(e,t)},_logMessage:function(e,t){if(this.options.debug){return console.debug(""+this.options.dataAttribute+": "+e,t)}},_getAllBlocks:function(){var t,n,r,i,s;if(this.options.blockSource){i=this.options.blockSource;s=[];for(r in i){n=i[r];s.push(function(){var i,s,o;o=[];for(i=0,s=n.length;i<s;i++){t=n[i];e(t).data(this.options.dataAttribute,r);if(this.allBlocks){o.push(this.allBlocks=this.allBlocks.add(e(t)))}else{o.push(this.allBlocks=e(t))}}return o}.call(this))}return s}else{return this.allBlocks=e("[data-"+this.options.dataAttribute+"]")}},_getOverlayOffset:function(){this.overlayOffset=this.element.get(0).getBoundingClientRect();return this.collisionTargetOffset=this.collisionTarget.get(0).getBoundingClientRect()},_addIdToBlocks:function(){var t,n;t=0;n=this;return this.allBlocks.each(function(){e(this).data(""+n.options.dataAttribute+"-id",t);return t++})},_createOverlayClones:function(){var t;t=this;this.allBlocks.each(function(){var n,r,i,s,o;r=t.element.clone();if(t.options.removeAttrOnClone){o=t.options.removeAttrOnClone;for(i=0,s=o.length;i<s;i++){n=o[i];r.removeAttr(n)}}r.addClass(""+t.options.dataAttribute+"-clone");r.addClass(e(this).data(t.options.dataAttribute));r.data(""+t.options.dataAttribute+"-id",e(this).data(""+t.options.dataAttribute+"-id"));if(t.allClones){return t.allClones=t.allClones.add(r)}else{return t.allClones=r}});if(this.options.keepClonesInHTML){this.allClones.insertAfter(this.element)}if(this.options.broadcastEvents){return this._triggerEvent("clonesCreated."+this.options.dataAttribute,this.allClones)}},_updateOverlayClones:function(){var t;t=this;this.allClones.each(function(){var n;n=e(this).data(""+t.options.dataAttribute+"-id");if(t.collidingBlocks.hasOwnProperty(n)){if(t.options.keepClonesInHTML){e(this).css({display:t.element.css("display")})}else{if(!document.body.contains(this)){e(this).insertAfter(t.element)}}t._clipOverlayClone(this,t._getCollisionArea(t.collidingBlocks[n]));if(t.options.simpleMode==="vertical"){return t._clipOverlayOriginal(t._getRelativeCollision(t.collidingBlocks[n]))}}else{if(t.options.keepClonesInHTML){return e(this).css({display:"none"})}else{return e(this).detach()}}});if(this.collidingBlocks.length===0){return this.element.css({clip:"rect(auto auto auto auto)"})}},_getCollisionArea:function(e){var t;t=[];t.push(this.overlayOffset.height-(this.overlayOffset.bottom-e.top));t.push(e.right-this.overlayOffset.left);t.push(e.bottom-this.overlayOffset.top);t.push(this.overlayOffset.width-(this.overlayOffset.right-e.left));return t},_getRelativeCollision:function(e){var t;t=[];if(this.collisionTargetOffset.top<=e.top){t.push(0);t.push(e.top-this.overlayOffset.top)}else if(this.collisionTargetOffset.bottom>=e.bottom){t.push(this.overlayOffset.height-(this.overlayOffset.bottom-e.bottom));t.push(this.overlayOffset.bottom)}else{t=[0,0]}return t},_getCollidingBlocks:function(){var t;t=this;this.collidingBlocksOld=this.collidingBlocks;this.collidingBlocks=[];return this.allBlocks.each(function(){var n,r;r=t.collidingBlocksOld.hasOwnProperty(e(this).data(""+t.options.dataAttribute+"-id"));n=this.getBoundingClientRect();if(n.bottom>=t.collisionTargetOffset.top&&n.top<=t.collisionTargetOffset.bottom&&n.left<=t.collisionTargetOffset.right&&n.right>=t.collisionTargetOffset.left){t.collidingBlocks[e(this).data(""+t.options.dataAttribute+"-id")]=n;if(t.options.broadcastEvents&&!r){return t._triggerEvent("collisionStart."+t.options.dataAttribute,this)}}else if(t.options.broadcastEvents&&r){return t._triggerEvent("collisionEnd."+t.options.dataAttribute,this)}})},_clipOverlayClone:function(t,n){if(this.options.simpleMode==="vertical"){return e(t).css({clip:"rect("+n[0]+"px auto "+n[2]+"px auto)"})}else{return e(t).css({clip:"rect("+n[0]+"px "+n[1]+"px "+n[2]+"px "+n[3]+"px)"})}},_clipOverlayOriginal:function(e){return this.element.css({clip:"rect("+e[0]+"px auto "+e[1]+"px auto)"})},_attachListeners:function(){var t;t=this;e(window).on(""+(this.options.updateOnResize?"resize."+this.options.dataAttribute:void 0)+" "+(this.options.updateOnScroll?"scroll."+this.options.dataAttribute:void 0),function(){return t.refresh()});if(this.options.updateOnCSSTransitionEnd){return this.element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(e){if(e.originalEvent.propertyName===t.options.updateOnCSSTransitionEnd){return t.refresh()}})}},refresh:function(){this._getOverlayOffset();this._getCollidingBlocks();return this._updateOverlayClones()},destroy:function(){e(window).off("resize."+this.options.dataAttribute+" scroll."+this.options.dataAttribute);this.element.off();clearInterval(this.autoUpdateTimer);this.element.css({clip:"auto auto auto auto"});this.allClones.remove();this.allBlocks=null;this.allClones=null;this.overlayOffset=null;this.collisionTarget=null;this.collisionTargetOffset=null;this.collidingBlocks=null;this.collidingBlocksOld=null;return this._destroy()},_destroy:e.noop})})(jQuery)}).call(this);


$(function() {

	$('.js-clipthru').clipthru({
		autoUpdate: true,
		autoUpdateInterval: 30,
		debug: true
	})

	// Sticky Header
	/*---------------------------------------------------*/

	var introHeight = $('.intro').height();

	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		if(winTop >= introHeight){
			$("header").addClass("sticky");
		}else{
			$("header").removeClass("sticky");
		}
	});

	/*---------------------------------------------------*/

	var lastId,
	topMenu = $(".main-menu"),
	topMenuHeight = topMenu.outerHeight()+15,
	menuItems = topMenu.find("a"),
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});

	// Bind to scroll
	$(window).scroll(function(){
		var fromTop = $(this).scrollTop()+topMenuHeight;
		
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
			return this;
		});
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		
		if (lastId !== id) {
			lastId = id;
			menuItems
				.parent().removeClass("active")
				.end().filter("[href='#"+id+"']").parent().addClass("active");
		}
	});

	/*---------------------------------------------------*/
	// Anchor navigation

	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			var _this = this;
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 400, function() {
				location.hash = _this.hash;
			});
			return false;
			}
		}
	});

	/*---------------------------------------------------*/
	


	/*---------------------------------------------------*/

	// Socials-toggle
	$('.socials-toggle').click(function(){
		$(this).toggleClass('open');
		$(this).siblings('.socials').toggleClass('open');
	});

	/*---------------------------------------------------*/

	var targBox = "box";

	function init() {
		if (document.getElementById) {
			var atags = document.getElementsByTagName("A");
			for (var i=0;i<atags.length;i++) {
				var ca = atags[i];
				if (ca.href.indexOf("#") > -1) {
					ca.onclick = function() {
						scrollDivToAnchor(this.href.split("#")[1]);
					}
				}
			}
		}
	}

	/*---------------------------------------------------*/

	$('input[placeholder], textarea[placeholder]').placeholder();
	

});
