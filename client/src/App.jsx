import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Scroll, 
  Flame, 
  Sparkles, 
  Send, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle,
  Ghost
} from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState({ connected: false, text: 'Awakening spirits...' });
  const [output, setOutput] = useState(
    `=== REPOREAPER TELEMETRY LOGS ===\n[SYSTEM READY]\nPossessing local workspace: C:\\Maheen_Code\\Github\\RepoReaper\nSummon an exorcism to audit git mutations, inspect stack traces, or banish bugs.`
  );
  const [inputMsg, setInputMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const checkHealth = () => {
    fetch('http://localhost:3001/api/health')
      .then((res) => res.json())
      .then((data) => setStatus({ connected: true, text: `Daemon Active: ${data.reaper} (${data.status})` }))
      .catch(() => setStatus({ connected: false, text: 'Spectral Bridge Unreachable (:3001)' }));
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleGitAudit = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/tools/git-status');
      const data = await res.json();
      setOutput(`=== GIT REPOSITORY EXORCISM ===\nSTATUS:\n${data.status}\n\n=== FILE MUTATIONS (DIFF) ===\n${data.diff}`);
    } catch (err) {
      setOutput(`[ERROR: FAILED TO COMMUNE WITH GIT REALM]\n${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInspectLogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/tools/logs');
      const data = await res.json();
      setOutput(`=== GRAVEYARD STACK TRACE LOGS ===\n${data.logs}`);
    } catch (err) {
      setOutput(`[ERROR: COULD NOT UNSEAL GRAVEYARD LOGS]\n${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleTriggerCurse = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/tools/trigger-curse', { method: 'POST' });
      const data = await res.json();
      setOutput(`[⚡ ANOMALY CURSE INSCRIBED]\n${data.message}\n\nClick "Inspect Logs" to view the stack trace.`);
    } catch (err) {
      setOutput(`[FAILED TO CAST CURSE]: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChat = async (e) => {
    e?.preventDefault();
    if (!inputMsg.trim()) return;

    const query = inputMsg;
    setInputMsg('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });
      const data = await res.json();
      setOutput(`> ${query}\n\n${data.reply}`);
    } catch (err) {
      setOutput(`[CONJURATION FAILED]: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundImage: `linear-gradient(rgba(10, 2, 22, 0.45), rgba(6, 1, 14, 0.65)), url('/halloween-bg.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 16px',
      overflow: 'hidden',
      color: '#fffae8',
      boxSizing: 'border-box'
    }}>

      {/* Main Dashboard Card */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '880px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>

        {/* Header Board & Status Pill */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {/* Wood Sign */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            background: 'linear-gradient(180deg, #441c08 0%, #291003 100%)',
            border: '3px solid #9e4f20',
            outline: '2.5px solid #140500',
            padding: '10px 22px',
            borderRadius: '16px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.85), inset 0 2px 4px rgba(255,180,100,0.3)'
          }}>
            <span style={{ position: 'absolute', top: '-14px', left: '22px', width: '5px', height: '14px', background: '#9e4f20', borderRadius: '2px', border: '1px solid #1a0800' }} />
            <span style={{ position: 'absolute', top: '-14px', right: '22px', width: '5px', height: '14px', background: '#9e4f20', borderRadius: '2px', border: '1px solid #1a0800' }} />
            <span style={{ position: 'absolute', top: '6px', left: '8px', width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd80' }} />
            <span style={{ position: 'absolute', top: '6px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd80' }} />

            <div style={{
              background: '#1d072b',
              padding: '7px',
              borderRadius: '10px',
              border: '2px solid #ff9e1f',
              boxShadow: '0 0 10px rgba(255, 158, 31, 0.45)'
            }}>
              <Ghost style={{ width: '26px', height: '26px', color: '#fed86f' }} />
            </div>

            <div>
              <h1 style={{
                margin: 0,
                fontSize: '22px',
                fontWeight: 900,
                fontFamily: 'Cinzel, Georgia, serif',
                letterSpacing: '2.5px',
                color: '#fff5db',
                textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 0 12px rgba(255,170,51,0.5)'
              }}>
                REPOREAPER
              </h1>
              <p style={{
                margin: 0,
                fontSize: '10.5px',
                color: '#ffb366',
                letterSpacing: '2px',
                fontWeight: 700
              }}>
                DIGITAL NECROMANCER DAEMON
              </p>
            </div>
          </div>

          {/* Status Capsule */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '9999px',
            background: 'rgba(21, 6, 36, 0.94)',
            border: `2px solid ${status.connected ? '#39ff14' : '#ef4444'}`,
            boxShadow: status.connected ? '0 0 20px rgba(57, 255, 20, 0.35)' : 'none',
            fontSize: '12.5px',
            fontFamily: 'Fira Code, monospace',
            fontWeight: 700,
            color: status.connected ? '#86efac' : '#fca5a5'
          }}>
            {status.connected ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
            <span>{status.text}</span>
          </div>
        </header>

        {/* 4 Action Signboard Tiles */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px'
        }}>
          {/* Tile 1: Audit Git */}
          <button
            onClick={handleGitAudit}
            disabled={loading}
            style={{
              position: 'relative',
              background: 'linear-gradient(180deg, #ff9b40 0%, #cc5500 100%)',
              border: '3px solid #ffd2a6',
              outline: '2px solid #3d1400',
              borderRadius: '16px',
              padding: '14px 10px',
              color: '#1a0700',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 22px rgba(204, 85, 0, 0.55), inset 0 2px 4px rgba(255,255,255,0.4)',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(255, 155, 64, 0.75)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 22px rgba(204, 85, 0, 0.55)';
            }}
          >
            <GitBranch size={24} color="#1a0700" style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.8px' }}>AUDIT GIT DIFF</span>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#381400' }}>Cleanse Staged Files</span>
          </button>

          {/* Tile 2: Inspect Logs */}
          <button
            onClick={handleInspectLogs}
            disabled={loading}
            style={{
              position: 'relative',
              background: 'linear-gradient(180deg, #ff9b40 0%, #cc5500 100%)',
              border: '3px solid #ffd2a6',
              outline: '2px solid #3d1400',
              borderRadius: '16px',
              padding: '14px 10px',
              color: '#1a0700',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 22px rgba(204, 85, 0, 0.55), inset 0 2px 4px rgba(255,255,255,0.4)',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(255, 155, 64, 0.75)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 22px rgba(204, 85, 0, 0.55)';
            }}
          >
            <Scroll size={24} color="#1a0700" style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.8px' }}>INSPECT LOGS</span>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#381400' }}>Read Graveyard Traces</span>
          </button>

          {/* Tile 3: Cast Anomaly */}
          <button
            onClick={handleTriggerCurse}
            disabled={loading}
            style={{
              position: 'relative',
              background: 'linear-gradient(180deg, #e64a19 0%, #8f2100 100%)',
              border: '3px solid #ffa080',
              outline: '2px solid #3d0e00',
              borderRadius: '16px',
              padding: '14px 10px',
              color: '#fff3eb',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 22px rgba(230, 74, 25, 0.55), inset 0 2px 4px rgba(255,255,255,0.3)',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(230, 74, 25, 0.75)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 22px rgba(230, 74, 25, 0.55)';
            }}
          >
            <Flame size={24} color="#ffe2d6" style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.8px' }}>CAST ANOMALY</span>
            <span style={{ fontSize: '10.5px', color: '#ffd5c7', fontWeight: 700 }}>Inject Runtime Curse</span>
          </button>

          {/* Tile 4: Banish Bug */}
          <button
            onClick={() => {
              fetch('http://localhost:3001/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'banish error' })
              })
                .then((r) => r.json())
                .then((d) => setOutput(d.reply));
            }}
            disabled={loading}
            style={{
              position: 'relative',
              background: 'linear-gradient(180deg, #8b3fd9 0%, #4c1182 100%)',
              border: '3px solid #e1a8ff',
              outline: '2px solid #230442',
              borderRadius: '16px',
              padding: '14px 10px',
              color: '#faedff',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 22px rgba(139, 63, 217, 0.55), inset 0 2px 4px rgba(255,255,255,0.3)',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(139, 63, 217, 0.75)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 22px rgba(139, 63, 217, 0.55)';
            }}
          >
            <Sparkles size={24} color="#f2d6ff" style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.8px' }}>BANISH BUG</span>
            <span style={{ fontSize: '10.5px', color: '#eed1ff', fontWeight: 700 }}>Necromancer Patch</span>
          </button>
        </section>

        {/* Telemetry Console Frame */}
        <section style={{
          position: 'relative',
          background: 'rgba(10, 2, 20, 0.94)',
          border: '3.5px solid #6e3715',
          outline: '3px solid #240e02',
          borderRadius: '22px',
          padding: '20px',
          boxShadow: '0 18px 50px rgba(0,0,0,0.92), inset 0 0 35px rgba(0,0,0,0.95)'
        }}>
          {/* Top Console Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '12px',
            marginBottom: '12px',
            borderBottom: '1.5px solid #3d1b09'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              <span style={{
                marginLeft: '10px',
                fontSize: '13.5px',
                fontFamily: 'Fira Code, monospace',
                color: '#ffb366',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Terminal size={17} color="#ff7a18" />
                Spectral Telemetry Stream
              </span>
            </div>
            <span style={{ fontSize: '11.5px', fontFamily: 'Fira Code, monospace', color: '#a88571' }}>Kiroween 2026</span>
          </div>

          {/* Console Textarea */}
          <textarea
            readOnly
            rows={10}
            value={loading ? 'Communing with the spirit realm...' : output}
            style={{
              width: '100%',
              backgroundColor: '#040108',
              border: '2px solid #331505',
              borderRadius: '14px',
              padding: '16px',
              color: '#39ff14',
              fontFamily: 'Fira Code, Consolas, monospace',
              fontSize: '13px',
              lineHeight: '1.65',
              resize: 'none',
              boxSizing: 'border-box',
              outline: 'none',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.95)'
            }}
          />

          {/* Incantation Summon Form */}
          <form onSubmit={handleChat} style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Chant an inquiry (e.g. 'audit dirty files' or 'banish the stack trace')..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: '#17092c',
                border: '2px solid #6e3715',
                borderRadius: '14px',
                padding: '12px 18px',
                fontSize: '13px',
                fontFamily: 'Fira Code, monospace',
                color: '#fff3db',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <button
              type="submit"
              disabled={loading || !inputMsg.trim()}
              style={{
                background: 'linear-gradient(90deg, #ff7a18 0%, #e0660e 100%)',
                color: '#1a0700',
                fontWeight: 900,
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: '14px',
                padding: '12px 24px',
                cursor: loading || !inputMsg.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !inputMsg.trim() ? 0.45 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 18px rgba(255, 122, 24, 0.45)'
              }}
            >
              <span>Summon</span>
              <Send size={15} />
            </button>
          </form>
        </section>

        {/* Footer with Pill Backing for Contrast */}
        <footer style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '11px',
          fontFamily: 'Fira Code, monospace',
          color: '#ffd8be',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'rgba(15, 4, 28, 0.85)',
          border: '1px solid rgba(255, 122, 24, 0.25)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
        }}>
          <span>🎃 Workspace: <code>C:\Maheen_Code\Github\RepoReaper</code></span>
          <span>Spec-Driven MCP Assistant</span>
        </footer>

      </div>
    </div>
  );
}