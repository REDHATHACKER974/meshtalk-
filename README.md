# MeshTalk - Offline Emergency Communication Network

Team: Tech Titans

Hackathon: BuildIT Hackathon - "First Contact" (Software Track)

The Problem

When an alien invasion rendered all global communication systems defunct, humanity was instantly stripped of messaging, calls and internet. In a such an scenario, we built a communication platform that operates completely on a local network, with absolutely zero reliance on the internet.

What MeshTalk Does

MeshTalk enables any device on the same local WiFi network to communicate and collaborate in real time – with no app installation or account registration required. Simply open your browser, scan a QR code, or enter a local IP address, and you're seamlessly connected.

# Core Features

-  Live Chat - real-time messaging across all devices in the local network.
-  Safety Board - allows users to broadcast their "I'm Safe" or "I Need Help" status with optional additional notes.
-  Resource Board - facilitates the posting and requesting of essential resources like water, food, shelter, and medicine.
-  Live User Counter - displays the number of currently connected users.
-  QR Code Join - enables quick and easy connection by scanning a QR code, eliminating the need for manual IP address input.

How It Works

MeshTalk utilizes a light-weight local server, built with Node.js and Express, which is accessible by any device connected to the same WiFi network via a web browser. The communication is made dynamic and real-time through Socket.IO, ensuring that all messages, safety check-ins, and resource posts are instantly synchronized across all connected devices without any external servers or internet.

Tech Stack

- Backend: Node.js, Express, Socket.IO

- Frontend: HTML, CSS, JavaScript (pure JavaScript, no frameworks)
- QR Code Generation: qrcodejs (client-side, no API key required)

Running Locally

1. Clone the repository:

git clone https://github.com/REDHATHACKER974/meshtalk-.git

cd meshtalk-

2. Install dependencies:

npm install

3. Start the server:

node server.js

4. Open http://localhost:3000 in your web browser.

5. To connect other devices on the same WiFi network, you need to find your local IP address (use ipconfig on Windows or ifconfig on Mac/Linux). Then, have other users navigate to http://YOUR-LOCAL-IP:3000 in their browsers.

Why This Matters

In the face of disasters, whether they be natural disasters, infrastructure failures, or in this fictional scenario, alien attacks, local mesh communication can prove to be critical for coordinated survival efforts. MeshTalk demonstrates that effective communication does not necessitate an internet connection; a simple local network and a browser are all that's needed.

Team

1. Aaryavansh Chaudhary

2. Chahat Vasudev

3. Om Kukreti
