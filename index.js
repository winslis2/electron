const { app, BrowserWindow } = require('electron');

function createWindow() {
   let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //加载inde.html文件
    win.loadFile('index.html');
    //打开开发者工具
    win.webContents.openDevTools();
    
    //当window被关闭，这个事件就会触发
    win.on('close', ()=>{
        console.log('close')
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', ()=> {
    if(process.platform !== 'darwin') {
        console.log('window-all-closed')
        app.quit();
    }
})
//存在于苹果系统中
app.on('activate', ()=> {
    if(win === null) {
        console.log('activate')
        createWindow();
    }

})



