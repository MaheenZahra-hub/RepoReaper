# Spec: RepoReaper Developer Diagnostic Assistant

## 1. Overview
RepoReaper is an interactive web-based developer assistant built with a nocturnal Halloween paper-cutout aesthetic. It leverages a local Model Context Protocol (MCP) daemon to analyze repository health, audit working tree diffs, inspect runtime crash traces, and propose targeted remediation patches.

## 2. Core Capabilities
* **Diff Exorcism (`git_diff_audit`)**: Communes directly with the local Git CLI to inspect staged and unstaged file modifications across the working tree.
* **Log Necromancy (`read_graveyard_logs`)**: Unseals real local runtime crash stack traces stored on disk (`graveyard.log`) to diagnose unhandled exceptions.
* **Curse Injection (`trigger_anomaly_curse`)**: Injects deterministic synthetic runtime errors to safely test error boundaries, log pipelines, and triage workflows.
* **Necromancer Patching (`banish_bug_patch`)**: Evaluates real error traces and proposes structured unified diff patches without modifying source files.