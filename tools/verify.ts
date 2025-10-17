#!/usr/bin/env bun
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

interface VerificationSpec {
  target: string;
  algorithm: 'sha256' | 'sha512';
  expected: string; // hex string
}

function hash(content: string | Uint8Array, algo: 'sha256' | 'sha512') {
  const h = createHash(algo);
  h.update(content);
  return h.digest('hex');
}

async function main() {
  const args = new Map<string, string>();
  for (let i = 2; i < process.argv.length; i += 2) {
    const k = process.argv[i];
    const v = process.argv[i + 1];
    if (!k || !v) continue;
    args.set(k.replace(/^--/, ''), v);
  }
  const specPath = args.get('spec');
  if (!specPath) {
    console.error('Usage: bun run tools/verify.ts --spec <path>');
    process.exit(2);
  }
  const raw = await readFile(specPath, 'utf8');
  const spec: VerificationSpec = JSON.parse(raw);
  const file = await readFile(spec.target);
  const actual = hash(file, spec.algorithm);
  const ok = actual.toLowerCase() === spec.expected.toLowerCase();
  const result = { ok, algorithm: spec.algorithm, expected: spec.expected, actual, target: spec.target };
  console.log(JSON.stringify(result));
  process.exit(ok ? 0 : 1);
}

main().catch((err) => {
  console.error(JSON.stringify({ ok: false, error: String(err) }));
  process.exit(1);
});
