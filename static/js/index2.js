/**
 * Created by qimi on 2016/5/9.
 */
(function() {
    var map = new BMap.Map("1-map");          // 创建地图实例
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
})();