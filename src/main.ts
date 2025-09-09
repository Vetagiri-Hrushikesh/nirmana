import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="nirmana-container">
    <!-- Main Content -->
    <div class="main-content">
        <div class="welcome-screen">
          <div class="welcome-header">
            <div class="logo-container">
              <img src="/Xcode.svg" alt="Nirmana Logo" class="nirmana-logo" />
            </div>
            <h1>Nirmana</h1>
          </div>

          <div class="welcome-actions">
            <button class="action-btn" data-action="open-project" title="Open an existing project (Ctrl+O)">
              <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <span class="action-title">Open project</span>
            </button>
            
            <button class="action-btn" data-action="clone-repository" title="Clone a repository (Ctrl+Shift+C)">
              <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span class="action-title">Clone repo</span>
            </button>
            
            <button class="action-btn" data-action="create-project" title="Create a new project (Ctrl+N)">
              <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              <span class="action-title">Create project</span>
            </button>
          </div>

          <div class="search-section">
            <div class="search-container">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input type="text" class="search-input" placeholder="Search projects, files, or commands..." />
            </div>
          </div>

          <div class="welcome-sections">
            <div class="section">
              <div class="section-header">
                <h2>Recent projects</h2>
                <a href="#" class="view-all-link">View all (5)</a>
              </div>
              <div class="project-list">
                <div class="project-item">
                  <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span class="project-name">bhavitha</span>
                  <span class="project-path">~/maigha</span>
                </div>
                <div class="project-item">
                  <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span class="project-name">TEST</span>
                  <span class="project-path">~/Desktop</span>
                </div>
                <div class="project-item">
                  <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span class="project-name">2GENZ</span>
                  <span class="project-path">~/Documents</span>
                </div>
                <div class="project-item">
                  <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span class="project-name">HL0001</span>
                  <span class="project-path">~/Documents/Personal</span>
                </div>
                <div class="project-item">
                  <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span class="project-name">SecondGeneration</span>
                  <span class="project-path">~/Documents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-left">
        <button class="footer-btn" data-action="help" title="Help and Documentation">
          <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </button>
        <span class="status-text">Ready</span>
      </div>
      
      <div class="footer-center">
        <span class="version">v0.0.0</span>
        <span class="separator">•</span>
        <span class="build-info">Development Build</span>
      </div>
      
      <div class="footer-right">
        <button class="footer-btn" data-action="notifications" title="Notifications">
          <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <button class="footer-btn" data-action="settings" title="Settings">
          <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
      </div>
    </div>
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

// Add event listeners for navigation and actions
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar navigation removed - using full-screen welcome

  // Action buttons - professional IDEs don't use loading animations
  const actionButtons = document.querySelectorAll('.action-btn')
  actionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const action = (button as HTMLElement).dataset.action
      console.log('Action clicked:', action)
      
      // Handle specific actions immediately - no loading states
      switch(action) {
        case 'create-project':
          console.log('Opening project creation wizard...')
          break
        case 'open-project':
          console.log('Opening file dialog...')
          break
        case 'clone-repository':
          console.log('Opening repository clone dialog...')
          break
      }
    })
  })

  // Footer buttons
  const footerButtons = document.querySelectorAll('.footer-btn')
  footerButtons.forEach(button => {
    button.addEventListener('click', () => {
      const action = (button as HTMLElement).dataset.action
      console.log('Footer action clicked:', action)
      
      switch(action) {
        case 'help':
          console.log('Opening help documentation...')
          break
        case 'notifications':
          console.log('Opening notifications panel...')
          break
        case 'settings':
          console.log('Opening settings panel...')
          break
      }
    })
  })

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case 'n':
          e.preventDefault()
          const createBtn = document.querySelector('[data-action="create-project"]') as HTMLButtonElement
          createBtn?.click()
          break
        case 'o':
          e.preventDefault()
          const openBtn = document.querySelector('[data-action="open-project"]') as HTMLButtonElement
          openBtn?.click()
          break
      }
    }
  })

  // Professional IDEs don't use ripple effects - keeping it clean and minimal
})
