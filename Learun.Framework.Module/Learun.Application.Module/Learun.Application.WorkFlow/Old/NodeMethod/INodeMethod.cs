﻿
namespace Learun.Application.WorkFlow
{
    /// <summary>
    
    /// Copyright (c) 2013-2020 上海力软信息技术有限公司
    /// 创建人：力软-框架开发组
    /// 日 期：2017.04.17
    /// 描 述：工作流引擎节点触发接口
    /// </summary>
    public interface INodeMethod
    {
        /// <summary>
        /// 节点审核通过执行方法
        /// </summary>
        /// <param name="processId"></param>
        void Sucess(string processId);
        /// <summary>
        /// 节点审核失败执行方法
        /// </summary>
        /// <param name="processId"></param>
        void Fail(string processId);
    }
}
