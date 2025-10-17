## Hiring Plan (Deterministic)

- **define-roles**: Write machine-readable `ops/roles/*.json` with competencies and leveling.
- **calibrate-bar**: Interview loops per role; store question banks and rubrics in JSON.
- **sourcing**: Track candidates in `ops/candidates.csv`; each row has SHA256 of resume artifact.
- **assess**: Structured scorecards (CSV/JSON) with calibrated anchors. Output aggregate stats.
- **decide**: Offer/no-offer exported as `ops/decisions.json` with rationale and rubric alignment.
