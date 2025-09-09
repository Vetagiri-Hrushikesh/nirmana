import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="hello-container">
    <h1>Hello World</h1>
  </div>
`

// Use contextBridge - check if ipcRenderer is available
if (window.ipcRenderer) {
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log('Message from main process:', message)
  })
} else {
  console.warn('ipcRenderer not available - running in web mode')
}
