# [NJU侠网站系统](https://nju.itxia.cn)
南京大学IT侠预约、后台网站系统代码库。

## 项目概述
本项目目前有三个子项目。

### [API服务](project/api-service)
Kotlin编写的SpringBoot项目。
为前端提供Rest API服务。

### [SPA单页前端](project/spa-website)
使用React框架、Antd UI组件库构建的单页应用。

### [Proxy Server](project/proxy-server)
HTTP代理服务器，同时具有监控、日志功能。

## 技术概述
- 使用前后端分离的架构：前端是由React构建的单页应用，后端使用kotlin编写的SpringBoot项目，并使用MongoDB存储数据。

- 前端使用React框架，react-router路由多个页面，并使用AntDesign提供的UI组件构建。
- 编写了react hook来减少模板代码、增加复用，如useApi、useLocalStorageState等等。
- 使用OAuth2.0来提供通过QQ登录功能。
- 使用cookie strict字段、https、HSTS保证前端请求安全性。
- 为解决单页应用请求跨域问题，使用express.js编写了router，将后端请求地址代理到/api/**下。

## 更新日志

### 2020.09.11
#### 新特性
##### 新域名
- 正在测试新域名(https://nju.itxia.cn)，速度快很多，欢迎大家使用~

##### 成员管理
- 查看、筛选所有成员账号的信息。
- 管理账号，包括：重置密码、更改账号权限、启用/禁用账号。
- 邀请新人加入🎉🎉🎉。
- (仅管理员可用)

##### 发布公告
- 拖拽改变公告前后顺序。
- 支持编辑旧公告。
- 可删除旧公告。
- (仅管理员可用)

##### 预约系统
- 可找回预约单，方便在其他设备查看。

##### QQ登录
- 添加了简易的界面。

#### 问题修复
- 修复了IOS设备无法登录的问题 (代价是.site变慢了)。
- 修复了www.itxia.site无法打开的问题。
- 修复了重置密码按钮跳转失败的问题。

### 2020.08.22
#### 新特性

##### 预约单筛选

- 新增文字搜索，可搜索姓名、电脑型号、问题描述等等，emoji也能搜😛。搜索关键字会高亮显示。搜索不区分英文大小写。
- 新增按预约时间搜索，精确到天。
- 预约单状态筛选改成单选。(多选有点反人类)
- 预约单页面现在会记住上次的筛选条件。

##### 预约单回复、讨论区

- 现在可以给客户回复消息，客户也可以在预约页面回复你。同样可以使用附件功能。
- 讨论区可供IT侠内部讨论预约单用，客户是看不到的。

##### 邮件提醒

- IT侠可选择接收邮件提醒：当本校区有新预约单、我的预约单有新回复时，发送邮件提醒我。若需要邮件提醒，请在个人信息页面进行设置。
- 在给客户回消息时，可选发送邮件提醒他。(前提是他预约时选择了接收邮件提醒)
- 请注意查收来自nju@itxia.cn的邮件，有概率会被服务商认为是垃圾邮件。

#### 问题修复和改进

##### 预约系统

- 移除了预约页面的双下巴卡片。
- 预约表单提交校验失败时，滚动页面到出错位置。
- 已有预约时，预约按钮显示"查看我的预约"。
- 现在在预约后仍能看到公告栏。
- 更新了预约单卡片的UI。
- 修复了问题描述不能换行的问题。
- 点击右下角😶可以查看预约单ID，方便定位网站问题。

##### 后台系统

- 附件上传UI改成美丽的照片墙。
- 更改了图片附件预览的UI。
- 附件加载使用缩略图，加载速度那不知道比原来高到哪里去了。
- 修复了问题描述、回复信息等文本不显示换行的问题。
- 修复了老系统预约单中，问题描述直接显示特殊转义字符的问题。
- 修复了页面跳转可能导致的内存泄露问题。
- 使用iOS设备无法登录时，提示如何解决。(iOS默认不允许跨域cookie)
- 移除了暂未使用的页面。
- 居中了各种东西，微调了响应式布局。
- 更新了不少UI元素。
- 更新了不少文字描述。

#### 计划中的新特性

##### 维修经验

类似贴吧、论坛，可发表维修预约单的经验，并可以检索、讨论，供他人参考。
很久以前IT侠甚至有纸质的维修经验记录。如果能把大家的维修经验分享出来，对维修、内训等等都会有巨大帮助。

##### 成员管理

很普通的功能，新学期招新需要用到。

#### 已知问题

- (已解决@20.09.11)iOS默认不允许跨域cookie，使用iOS设备无法正常登录后台系统。计划使用新的域名解决(例如nju.itxia.cn)。