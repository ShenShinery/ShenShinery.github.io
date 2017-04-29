/**
 * describe: 自定义插件 date : 2017-04-19
 * @author PENGPAI182
 * 
 */
;
(function () {
	$("<link>").attr({
		rel : "stylesheet",
		type : "text/css",
		href : "selfDefineUtils.css"
	}).appendTo("head");
	var self_define = {};
	
	// 自定义弹窗
	self_define.confirm = function(opts) {
		var infoText = opts.infoText;
		var btnNum = opts.btnTextArray.length;
		var btnTextArray = opts.btnTextArray;
		var btnActionArray = opts.btnActionArray;
		var modalBodyHtml = '<div class="modal-body"><p class="infoText">'
				+ infoText + '</p></div>';
		var btnHtml = '';
		var listStyle = '';

		// 当按钮数目不小于3个时，排列样式为垂直
		if (btnNum >= 3) {
			listStyle = 'vertical';
			for (var i = 0; i < btnNum - 1; i++) {
				btnHtml += '<a href='+ btnActionArray[i] + ' class="confirm text-orange">'
						+ btnTextArray[i] + '</a>';
			}
			btnHtml += '<a class="cancel" onclick="self_define.cancel()">' + btnTextArray[btnNum - 1]
					+ '</a>';
		}

		// 当按钮数目为2个时，排列样式为水平
		if (btnNum == 2) {
			listStyle = 'horizontal';
			btnHtml += '<a class="cancel" onclick="self_define.cancel()">' + btnTextArray[1]
					+ '</a><a href='+ btnActionArray[0] + ' class="confirm text-orange">'
					+ btnTextArray[0] + '</a>';
		}
		var modalFooterHtml = '<div class="modal-footer ' + listStyle + '">'
				+ btnHtml + '</div>';
		var modalDialogHtml = '<div class="modal" id="ccmsConfirm"><div class="modal-dialog"><div class="modal-content">'
				+ modalBodyHtml + modalFooterHtml + '</div></div></div>';

		// 判断是否已存在弹框
		var modal = $('.modal').html();
		if (modal != null || modal != undefined) {
			$('.modal').remove();
		}

		// 生成弹框
		$('body').append(modalDialogHtml);

		// 让弹框居于页面中间
		var modal = $('.modal');
		modal.css('display', 'block');
		var modalDialog = modal.children('.modal-dialog');
		var modalHeight = modalDialog.height();
		console.log(modalHeight);
		modalDialog.css('top', '50%');
		modalDialog.css('margin-top', '-' + modalHeight / 2 + 'px');
	};
	/*
	 * self_define.confirm({ infoText: '你尚未绑定信用卡请先绑定。如您尚未持有我行信用卡，点击按钮立即申请！',
	 * btnTextArray: ['我要办卡','立即绑定','取消'],
	 * btnActionArray: ['https://www.baidu.com','https://hao123.com',''] });
	 */
	self_define.cancel = function(){
		$(".modal").hide();
	};
	
/*	self_define.forward = function(actUrl){
		if(actUrl){
			window.location.href=actUrl;
		}
	}*/
	window.self_define = self_define;
	
})();
