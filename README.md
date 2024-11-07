# 🌟 Problem 10: Simple TCP Server 🌟

Welcome to the tenth challenge in the Node.js practical problem series! 🚀 This problem will help you understand how to use Node.js’s `net` module to create a **Simple TCP Server** that echoes back any data it receives. Let’s get started! 💻  

---

## 📝 Problem Statement  

Create a simple **TCP Server** using Node.js's `net` module.  

1. The server should accept incoming TCP connections.  
2. It should echo back any data sent to it by the client.  

---

## 🎯 Learning Goals  

- Understand the basics of the Node.js `net` module.  
- Learn how to create and manage TCP servers in Node.js.  
- Explore handling client-server communication over a TCP connection.  

---

## 📂 Project Structure  

Your project folder should look like this:  

```bash  
10-simple-tcp-server-node-problem/  
├── tcpServer.js        # The script to create the TCP server  
├── README.md           # Documentation for this problem  
└── package.json        # Project configuration file  
```

---

## 🌟 Features to Enhance

Once you’ve completed the basics, try adding:

- **Dynamic Port Configuration**: Allow the server port to be passed via command-line arguments.

- **Multiple Client Support**: Handle multiple clients connecting to the server simultaneously.

- **Message Logging**: Log all messages received from clients into a file.
-

## 🧠 What You’ll Learn

- How to create and start a TCP server in Node.js.

- Handling incoming connections and data streams.

- Managing event-driven programming with `net` module events like `data`, `connection`, and `close`.
