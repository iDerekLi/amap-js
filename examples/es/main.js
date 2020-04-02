import AMapJS from 'amap-js';
import './style.css';

const AMapLoader = new AMapJS.AMapLoader({
  key: '您申请的key值',
  version: '1.4.15',
  plugins: ['AMap.ToolBar']
});

const AMapUILoader = new AMapJS.AMapUILoader({
  version: '1.0'
});

function some() {
  new AMap.Map(document.getElementById('map'));

  AMapLoader.loadPlugin(['AMap.ToolBar'])
    .then(() => {
      console.log('AMap.ToolBar加载完成', AMap.ToolBar);
    })
    .catch(e => {});

  AMapUILoader.loadUI(['overlay/SimpleMarker'])
    .then(([SimpleMarker]) => {
      console.log('AMapUI SimpleMarker加载完成', SimpleMarker);
    })
    .catch(e => {});
}

AMapJS.load([AMapLoader, AMapUILoader])
  .then(([_AMapLoader, _AMapUILoader]) => {
    _AMapUILoader.initAMapUI();
    // 其他逻辑
    some();
  })
  .catch(e => {
    console.log(e);
  });

// AMapLoader.load().then(() => {
//   AMapUILoader.load().then(loader => {
//     loader.initAMapUI();
//     // 其他逻辑
//     some();
//   })
//   .catch(e => {
//     console.log(e);
//   });
// })
// .catch(e => {
//   console.log(e);
// });
console.log(AMapLoader);
console.log(AMapUILoader);
