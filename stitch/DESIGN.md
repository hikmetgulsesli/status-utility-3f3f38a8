# Design System: Status Utility

**Stitch project:** 18249339556255650431
**Authority:** ProductSpec v2 plus browser-observed DesignInteractionGraph v2.

## Product screens
- Status Page - Status Utility (TARGET_STATUS_PAGE; source 4a0204959bcd45dfa7418f5570ad58b8)

## Physical control slots
- CSLOT_REFRESH_STATUS_REFRESH_BUTTON: Refresh Status on SURF_STATUS_PAGE

## Implementation boundary
These files are accepted visual source, not executable application behavior. Every physical control is owned by its exact data-action and data-control-slot identity. Affected surfaces do not authorize additional controls. Routes, state transitions, persistence, reload behavior, and evidence predicates come from the sealed Product Build Packet, not from labels, inferred layout, or agent prose.

## Source policy
Only the selected response IDs in DESIGN_MANIFEST.json are canonical screens. STITCH_RENDERED_SEMANTICS_V2.json records the locked browser observation, STITCH_TARGET_CANDIDATE_SELECTION.json records exact qualification, and STITCH_RESPONSE_BINDINGS.json joins each target to the downloaded HTML and screenshot hashes. Unselected provider output is evidence only and cannot become implementation authority.
