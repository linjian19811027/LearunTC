﻿/* * 创建人：超级管理员
 * 日  期：2020-07-08 22:22
 * 描  述：合同结算详情
 */
var acceptClick;
var keyValue = request('keyValue');

var F_PersonId = request('F_PersonId');
var F_UserName = request('F_UserName');
var F_IDCardNo = request('F_IDCardNo');
var F_SettlementsId = request('F_SettlementsId');


var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            $('.lr-form-wrap').lrscroll();
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_PayStatus').lrDataItemSelect({ code: 'TrainPayStatus' });
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/LR_CodeDemo/SettlementsDetails/GetFormData?keyValue=' + keyValue, function (data) {
                    for (var id in data) {
                        if (!!data[id].length && data[id].length > 0) {
                            $('#' + id ).jfGridSet('refreshdata', data[id]);
                        }
                        else {
                            $('[data-table="' + id + '"]').lrSetFormData(data[id]);
                        }
                    }
                });
            }
            $("#F_PersonId").val(F_PersonId);
            $("#F_UserName").val(decodeURIComponent(escape(F_UserName)));
            $("#F_IDCardNo").val(F_IDCardNo);
            $("#F_SettlementsId").val(F_SettlementsId);
            
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('body').lrValidform()) {
            return false;
        }
        var postData = {
            strEntity: JSON.stringify($('body').lrGetFormData())
        };
        $.lrSaveForm(top.$.rootUrl + '/LR_CodeDemo/SettlementsDetails/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
