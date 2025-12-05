**Virtual AI Assistant — Mini Project**

- **Files:**
  - `index.html` — main UI
  - `style.css` — styles and responsive layout
  - `script.js` — voice recognition, TTS, command handling
  - `assets/robot.svg` — placeholder humanoid robot image (replace with your image if you have one)

- **What it does:**
  - Listens for voice when you click `Talk` and responds via speech synthesis.
  - Supports commands like: "open YouTube", "open Google", "what is the time", "tell me a joke".
  - Fallback: searches Google for unknown queries.

- **Limitations:**
  - Browser cannot open arbitrary desktop applications for security reasons; only web pages (URLs) can be opened from the page.
  - Best used in Chrome/Edge (Chromium) for SpeechRecognition support.
  - Serve the project over HTTP(S) using Live Server or a local server — some browser APIs require a secure context.

- **How to test locally (Windows, using VS Code Live Server):**

  1. Open the workspace in VS Code.
  2. Install Live Server extension (if not installed).
  3. Right-click `index.html` → `Open with Live Server`.
  4. In the opened page allow microphone access.
  5. Click `Talk` and say commands like:
     - "Hey Nova, open YouTube"
     - "Nova, what is the time"
     - "Open Google"
  6. The assistant will respond and open sites in new tabs.

- **How to provide your own robot image:**
  - Replace `assets/robot.svg` with your image named `robot.png` or `robot.svg`, or edit `index.html` to point to your filename.

- **Next enhancements I can help with:**
  - Continuous wake-word detection (requires native app or background service).
  - More command mappings and custom local HTML app opening within this project.
  - Save assistant settings to `localStorage` and add themes.

If you want, upload the robot image you'd like me to use and I will replace the placeholder and adjust styling for it.