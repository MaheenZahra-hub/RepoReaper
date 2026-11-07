import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const LOG_FILE = path.join(__dirname, 'graveyard.log');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Health Probe
app.get('/api/health', (req, res) => {
  res.json({ status: 'haunting', reaper: 'awake', tools: 4 });
});

// 2. Tool: Git Status & Diff
app.get('/api/tools/git-status', (req, res) => {
  try {
    let status = '';
    let diff = '';
    try {
      status = execSync('git status --short', { cwd: REPO_ROOT, encoding: 'utf8' });
    } catch (e) {
      status = 'Git status clean or unavailable.';
    }
    try {
      diff = execSync('git diff', { cwd: REPO_ROOT, encoding: 'utf8' });
      if (!diff.trim()) {
        diff = '(No uncommitted file mutations detected. The repository is pristine.)';
      }
    } catch (e) {
      diff = 'No diff available.';
    }
    res.json({ status: status || 'Workspace clean.', diff });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Tool: Inspect Graveyard Logs
app.get('/api/tools/logs', (req, res) => {
  try {
    if (!fs.existsSync(LOG_FILE)) {
      return res.json({ logs: '[GRAVEYARD VAULT EMPTY]: No unhandled curses detected.' });
    }
    const logs = fs.readFileSync(LOG_FILE, 'utf8');
    res.json({ logs: logs || '[GRAVEYARD VAULT EMPTY]' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Tool: Cast Anomaly (Inject Simulated Fault)
app.post('/api/tools/trigger-curse', (req, res) => {
  try {
    const timestamp = new Date().toISOString();
    const curseEntry = `\n[ERROR] ${timestamp} - FATAL UNCAUGHT EXCEPTION:
  TypeError: Cannot read properties of undefined (reading 'banishBug')
      at necromancerRoutine (C:\\Maheen_Code\\Github\\RepoReaper\\daemon\\exorcism.js:42:15)
      at async processSpectralQueue (C:\\Maheen_Code\\Github\\RepoReaper\\server\\mcp-server.js:108:9)
  [ALERT] Memory corruption simulated by RepoReaper daemon.\n`;

    fs.appendFileSync(LOG_FILE, curseEntry, 'utf8');
    res.json({ success: true, message: 'A dark anomaly has been inscribed into graveyard.log' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Tool: Necromancer Chat / Patch Conjuration (Fixes the 404 error)
app.post('/api/chat', (req, res) => {
  try {
    const { message } = req.body;
    const query = (message || '').toLowerCase();

    // Read active logs for grounding
    let recentError = 'None detected';
    if (fs.existsSync(LOG_FILE)) {
      const allLogs = fs.readFileSync(LOG_FILE, 'utf8').trim().split('\n');
      recentError = allLogs.slice(-6).join('\n') || recentError;
    }

    if (query.includes('banish') || query.includes('fix') || query.includes('patch')) {
      return res.json({
        reply: `=== ⚡ NECROMANCER REMEDIATION PATCH ===\nTarget Error: Cannot read properties of undefined (reading 'banishBug')\nLocation: daemon/exorcism.js:42\n\nProposed Patch:\n\`\`\`diff\n- const result = daemon.banishBug(target);\n+ const result = daemon?.banishBug ? daemon.banishBug(target) : await fallbackBanish(target);\n\`\`\`\n[STATUS]: Curse banished. Exorcism complete.`
      });
    }

    if (query.includes('audit') || query.includes('status') || query.includes('git')) {
      const gitOut = execSync('git status --short', { cwd: REPO_ROOT, encoding: 'utf8' });
      return res.json({
        reply: `=== GIT REALM AUDIT ===\n${gitOut || 'All spectral artifacts committed. Clean working tree.'}`
      });
    }

    res.json({
      reply: `[DAEMON CONJURED]: Received instruction: "${message}". Telemetry bridge stable. Ask to 'audit dirty files' or 'banish the stack trace'.`
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`💀 RepoReaper server haunting on http://localhost:${PORT}`);
});