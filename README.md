<div align="center">

# 🎃 RepoReaper: Digital Necromancer Daemon

RepoReaper is an interactive repository diagnostic assistant powered by the **Model Context Protocol (MCP)**. It bridges a nocturnal Halloween paper-cutout developer dashboard with real Git operations and runtime crash traces, synthesizing code patches without altering project source code.

Built for the **Kiroween Hackathon 2026**.

<br />

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](./LICENSE)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18%2B-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![MCP](https://img.shields.io/badge/Protocol-MCP-8A2BE2)

</div>

---

## Table of Contents
- [Overview](#overview)
- [Architecture & MCP Pipeline](#architecture--mcp-pipeline)
- [Core Capabilities](#core-capabilities)
- [Project Structure](#project-structure)
- [Spec-Driven Engineering with Kiro](#spec-driven-engineering-with-kiro)
- [Quick Start](#quick-start)
- [Testing the Diagnostic Flow](#testing-the-diagnostic-flow)
- [MCP Tool API Reference](#mcp-tool-api-reference)
- [Security & Safe Execution](#security--safe-execution)
- [License](#license)

---

## Overview

RepoReaper turns repository audits and crash triage into an interactive developer experience. Running as a local daemon, it unseals local error logs, audits working tree status via Git CLI, and generates targeted unified diff proposals through an occult terminal dashboard.

| Capability | Description |
| :--- | :--- |
| **Git Exorcism** | Audits working tree modifications via read-only Git CLI operations |
| **Log Necromancy** | Unseals real local crash stack traces stored on disk (`graveyard.log`) |
| **Curse Injection** | Injects synthetic runtime exceptions to safely test error handlers |
| **Patch Conjuration** | Synthesizes unified diff proposals grounded in real logs without modifying source files |
| **Spectral UI** | Layered Halloween paper-cutout UI with live telemetry streaming and daemon health polling |

---

## Architecture & MCP Pipeline


```

┌──────────────────────────────────────────────┐
│     Client Dashboard (Vite / React :5173)    │
└──────────────────────┬───────────────────────┘
                       │ HTTP / JSON
                       ▼
┌──────────────────────────────────────────────┐
│     RepoReaper Daemon (Node / Express :3001) │ ◄── Model Context Protocol
└──────────────┬────────────────────────┬──────┘
               │                        │
               ▼ (child_process)        ▼ (fs I/O)
┌───────────────────┐    ┌───────────────────┐
│   Local Git CLI   │    │   graveyard.log   │
│  (git status/diff)│    │   (Crash Trace)   │
└───────────────────┘    └───────────────────┘

```

> **Note:** The Node.js daemon acts as an MCP server. UI interactions route strictly through defined endpoints, keeping file reads and process execution sandboxed to the project directory.

---

## Core Capabilities

* **`git_diff_audit`**: Inspects uncommitted and staged modifications across the repository.
* **`read_graveyard_logs`**: Reads runtime stack traces from `server/graveyard.log` to pinpoint uncaught exceptions.
* **`trigger_anomaly_curse`**: Generates a deterministic `TypeError` event for log pipeline verification.
* **`banish_bug_patch`**: Produces formatted before-and-after patch recommendations for active issues.

---

## Project Structure


```

RepoReaper/
├── .kiro/
│   ├── core.md                 # Core capabilities and system overview
│   ├── persona.md              # Necromancer daemon voice and directives
│   ├── spec.md                 # Technical specification and route schemas
│   └── steering.md             # Architecture constraints and guidelines
├── client/
│   ├── public/
│   │   └── halloween-bg.jpeg   # Paper-cutout background illustration
│   ├── src/
│   │   ├── App.jsx             # Action triggers and telemetry stream
│   │   └── main.jsx            # React root mount
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── mcp-server.js           # MCP daemon implementation
│   ├── graveyard.log           # Runtime error trace (gitignored)
│   └── package.json
├── .gitignore
├── LICENSE
└── README.md

```

---

## Spec-Driven Engineering with Kiro

RepoReaper was planned and built using spec-driven workflows with Kiro:
* **`/.kiro/spec.md`**: Defines endpoint schemas, component boundaries, and tool output requirements.
* **`/.kiro/steering.md`**: Enforces system constraints, clean repository rules, and read-only safety policies.
* **`/.kiro/persona.md`**: Governs the daemon's deadpan diagnostic persona and patch formatting rules.

---

## Quick Start

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Git](https://git-scm.com/) installed and available on system `PATH`

### 1. Start the MCP Backend Daemon
```bash
cd server
npm install
npm start

```

The server will initialize on `http://localhost:3001`.

### 2. Start the Client Dashboard

In a new terminal:

```bash
cd client
npm install
npm run dev

```

Open `http://localhost:5173` in your browser.

---

## Testing the Diagnostic Flow

1. **Cast Anomaly**: Click the red signboard to write a test exception to `graveyard.log`.
2. **Inspect Logs**: Click the parchment signboard to view the stack trace in the telemetry terminal.
3. **Audit Git Diff**: Click the orange signboard to check working tree changes.
4. **Banish Bug**: Click the purple button (or send `banish the stack trace`) to receive a suggested patch.

---

## MCP Tool API Reference

| Method | Endpoint | Purpose | Output |
| --- | --- | --- | --- |
| `GET` | `/api/health` | Service health probe | `{ "status": "haunting", "reaper": "awake", "tools": 4 }` |
| `GET` | `/api/tools/git-status` | Runs `git status` and `git diff` | `{ "status": "...", "diff": "..." }` |
| `GET` | `/api/tools/logs` | Reads active crash trace | `{ "logs": "[ERROR] ..." }` |
| `POST` | `/api/tools/trigger-curse` | Injects synthetic exception | `{ "success": true, "message": "..." }` |
| `POST` | `/api/chat` | Triage and diff conjuration | `{ "reply": "=== NECROMANCER PATCH === ..." }` |

---

## Security & Safe Execution

* **Read-Only Git Operations**: Only non-destructive inspection commands (`git status`, `git diff`) are executed.
* **Local Isolation**: File reading is constrained to `graveyard.log`. No file updates are applied to source files automatically.
* **Zero Cloud Exposure**: All operations and telemetry remain entirely on the local host.

---

## License

This project is licensed under the [MIT License](./LICENSE).

```
