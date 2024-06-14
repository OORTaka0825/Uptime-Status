// 配置
window.Config = {

  // 显示标题
  SiteName: 'Taka站点监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur2581155-3bcb88a1571a6f66a55ca245',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '   📖博客',
      url: 'https://oortaka.top'
    },
    {
      text: '  🐼GitHub',
      url: 'https://github.com/OORTaka0825/Uptime-Status'
    },
    {
      text: '  📧邮箱',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=oortaka0825@gmail.com'
    },
  ],
};
