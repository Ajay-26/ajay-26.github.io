var wms_layers = [];

var format_India_State_Boundary_0 = new ol.format.GeoJSON();
var features_India_State_Boundary_0 = format_India_State_Boundary_0.readFeatures(json_India_State_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_State_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_State_Boundary_0.addFeatures(features_India_State_Boundary_0);
var lyr_India_State_Boundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_State_Boundary_0, 
                style: style_India_State_Boundary_0,
                popuplayertitle: 'India_State_Boundary',
                interactive: true,
                title: '<img src="styles/legend/India_State_Boundary_0.png" /> India_State_Boundary'
            });

lyr_India_State_Boundary_0.setVisible(true);
var layersList = [lyr_India_State_Boundary_0];
lyr_India_State_Boundary_0.set('fieldAliases', {'State_Name': 'State_Name', });
lyr_India_State_Boundary_0.set('fieldImages', {'State_Name': '', });
lyr_India_State_Boundary_0.set('fieldLabels', {'State_Name': 'no label', });
lyr_India_State_Boundary_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});