// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Inputs tab',
    window:win1
});


var lbl1= Titanium.UI.createLabel({
	color:'#999',
	text:'Button:',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top:10,
	left:0,
	width:'auto'
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Bananas'});
data[1]=Ti.UI.createPickerRow({title:'Strawberries'});
data[2]=Ti.UI.createPickerRow({title:'Mangos'});
data[3]=Ti.UI.createPickerRow({title:'Grapes'});

var picker = Ti.UI.createPicker({
  top:50,
  data: data
});
picker.selectionIndicator = true;

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Button:',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top:80,
	left:0,
	width:'auto'
});

var Btn = Titanium.UI.createButton({
    title:"OK",
    textAlign:"left",
    width:100,
    top:120,
    left:0
});

Btn.addEventListener('click', function(){
	alert("Btn has been clicked!");
});


var LblTextArea = Titanium.UI.createLabel({
	color:'#999',
	text:'Number area:',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top:160,
	left:0,
	width:'auto'
});

var textArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  top: 200,
  width: 300, height : 70
});

win1.add(lbl1);
win1.add(picker);
win1.add(label1);
win1.add(Btn);
win1.add(LblTextArea);
win1.add(textArea);
//
// create controls tab and root window
//
var colorArray = [
  '#ff00ff', '#f0f', 'rgb(255,0,255)',
  'transparent', '#55ff00ff', '#5f0f', 'rgba(255,0,255,0.3)',
  'aqua', 'black', 'blue', 'brown', 'cyan', 'darkgray', 'fuchsia', 'gray', 'green', 
  'lightgray', 'lime', 'magenta', 'maroon', 'navy', 'olive', 'orange', 'pink', 
  'purple', 'red', 'silver', 'teal', 'white', 'yellow',
];

var win2 = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Color Tab',
    window:win2
});

var rows = [];
var row;
for (var i=0, ilen = colorArray.length; i < ilen; i++){
  row = Ti.UI.createTableViewRow({
    color:'black',
    backgroundColor: colorArray[i],
    title: colorArray[i],
    height: 40
  });
  rows.push(row);
}
var table = Ti.UI.createTableView({
  data: rows,
  backgroundColor: 'white'
});
win2.add(table);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
