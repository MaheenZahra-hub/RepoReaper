import express from 'express';
import cors from 'cors';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// --- TOOL 1: Exorcise Git Diff ---
function getGitStatusAndDiff() {
  try {
    const status = execSync('git status --short', { encoding: 'utf-8' });
    const diff = execSync('git diff', { encoding: 'utf-8' });
    return {
      status: status.trim() || 'Graveyard is silent. Working directory clean.',
      diff: diff.trim() || 'No pending file mutations detected.'
    };
  } catch (error) {
    return { error: 'Failed to access git realm: ' + error.message };
  }
}

// --- TOOL 2: Inspect Graveyard Logs ---
function getGraveyardLogs() {
  const logPaths = [
    path.join(__dirname, 'graveyard.log'),
    path.join(__dirname, '..', 'npm-debug.log')
  ];

  for (const logPath of logPaths) {
    if (fs.existsSync(logPath)) {
      const content = fs.readFileSync(logPath, 'utf-8');
      const lines = content.split('\n');
      return lines.slice(-40).join('\n');
    }
  }

  return 'No recent fatal incantations found in the logs.';
}

// --- API ENDPOINTS FOR CLIENT UI ---

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'haunting', reaper: 'awake' });
});

// Run git exorcism tool
app.get('/api/tools/git-status', (req, res) => {
  const result = getGitStatusAndDiff();
  res.json(result);
});

// Run graveyard logs tool
app.get('/api/tools/logs', (req, res) => {
  const logs = getGraveyardLogs();
  res.json({ logs });
});

// Mock crash log generation (useful for testing and demo video)
app.post('/api/tools/trigger-curse', (req, res) => {
  const mockError = `[ERROR] ${new Date().toISOString()} - FATAL UNCAUGHT EXCEPTION:
TypeError: Cannot read properties of undefined (reading 'soul')
    at necromancy (/RepoReaper/server/spells.js:42:15)
    at summon (/RepoReaper/server/daemon.js:18:7)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)`;

  const logFile = path.join(__dirname, 'graveyard.log');
  fs.appendFileSync(logFile, mockError + '\n');
  res.json({ message: 'A dark anomaly has been inscribed into graveyard.log' });
});

app.listen(PORT, () => {
  console.log(`💀 RepoReaper server haunting on http://localhost:${PORT}`);
});