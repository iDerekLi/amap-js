# 安全密钥 v2.3.0

<p color="#f00">
注意：此次升级不会影响之前已获得 key 的使用；
升级之后的新增的key必须要配备安全密钥一起使用，
具体用法请您参看下文《JSAPI key和安全密钥设置和使用》（本次key升级新增安全密钥，是为了提升广大用户的对自己的key安全有效管理，降低明文传输被窃取的风险 。）
</p>


## 方法一 通过代理服务器使用安全密钥 [推荐]

### 1. key搭配代理服务器并携带安全密钥转发（安全）

```JavaScript
new AMapJS.AMapLoader({
  version: '2.0',
  key: '您申请的高德Key值',
  security: {
    serviceHost: '您的代理服务器域名或地址/_AMapService'
  }
});
```

### 2. 代理服务器的设置

以 Nginx 反向代理为例，参考以下三个location配置，进行反向代理设置，分别对应自定义地图、海外地图、Web服务，其中自定义地图和海外地图如果没有使用到相关功能也可以不设置。需要将以下配置中的“您的安全密钥”六个字替换为您刚刚获取的jscode安全密钥。

```yml
server {
    listen       80;             #nginx端口设置，可按实际端口修改
    server_name  127.0.0.1;      #nginx server_name 对应进行配置，可按实际添加或修改
    
    # 自定义地图服务代理
    location /_AMapService/v4/map/styles {
        set $args "$args&jscode=您的安全密钥";
        proxy_pass https://webapi.amap.com/v4/map/styles;
    }
    # 海外地图服务代理
    location /_AMapService/v3/vectormap {
        set $args "$args&jscode=您的安全密钥";
        proxy_pass https://fmap01.amap.com/v3/vectormap;
    }
    # Web服务API 代理
    location /_AMapService/ {
        set $args "$args&jscode=您的安全密钥";
        proxy_pass https://restapi.amap.com/;
    }
}
```

保存相关配置之后需要通过命令nginx -s reload  命令重新加载 nginx 配置文件

## 方法二 直接使用安全密钥
此方式仅建议开发环境使用

```JavaScript
new AMapJS.AMapLoader({
  version: '2.0',
  key: '您申请的高德Key值',
  security: {
    securityJsCode: '您申请的安全密钥'
  }
});
```

## 传统方式

具体细节参见[高德开发平台](https://lbs.amap.com/api/javascript-api/guide/abc/prepare).

```html
<script type="text/javascript">
window._AMapSecurityConfig = {
  serviceHost:'您的代理服务器域名或地址/_AMapService',  
  // 例如 ：serviceHost:'http://1.1.1.1:80/_AMapService',
}
</script>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script> 
```
