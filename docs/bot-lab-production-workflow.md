# Bot That Lyfe Technical Opportunity Intelligence Lab — Production Workflow

This workflow turns a completed Bot That Lyfe research article into
lab assets: system graphs, charts, narration scaffolds, and preview video.

The article remains the first-pass research product. The lab workflow treats
the article as an experiment specification and extracts the fenced JSON blocks
already embedded in the Markdown.

## Command

```bash
npm run lab:assets -- --article content/research/<slug>.md
```

Outputs land in:

```text
lab-assets/<article-slug>/
```

Key outputs:

- `manifest.json` — inventory of extracted data and generated files.
- `data/` — source graph/chart/map JSON plus Graphviz DOT files.
- `svg/` — vector assets for docs, slides, and web.
- `png/` — video/presentation-ready rasters.
- `video/preview.mp4` — FFmpeg preview reel.
- `video/explainer-production.mp4` — directed production cut with segmented
  narration, animated charts/graph, reusable intro/outro bumpers, callouts, and
  a generated music bed.
- `video/explainer-short-9x16.mp4` — vertical social cut with fast scene
  changes, emoji callouts, and a reusable short-form outro.
- `voiceover-draft.md` — narration scaffold for a Modern-Marvels-style explainer.

## Tool Layers

| Layer | Tool | Used for |
| --- | --- | --- |
| Graph rendering | Graphviz | Converts article system graphs into SVG/PNG assets. |
| Media assembly | FFmpeg | Stitches assets into a preview video. |
| 3D scenes | Blender | Optional cinematic/3D backgrounds where a rendered scene beats a static chart. |

No GIS/geospatial tooling — this domain's `map` blocks are point markers on campuses/labs/company HQs (see `.claude/skills/research-brief/reference/interactive-blocks.md`), rendered client-side with Leaflet, not a heavier GIS stack. If a future case study genuinely needs geospatial analysis (e.g. mapping the Bot That Lyfe 100 universities), evaluate GDAL/QGIS then rather than carrying unused tooling by default.

Run the local check:

```bash
npm run lab:tools
```

Install the light CLI tier:

```bash
npm run lab:tools -- --install-light
```

## Production Pattern

1. Publish or complete the research article.
2. Run `lab:assets` against the article to extract structured data and still assets.
3. For a rough internal preview only, inspect `video/preview.mp4`.
4. For a production explainer, run the directed renderer:

   ```bash
   npm run lab:explainer -- --run lab-assets/<slug>
   ```

   This creates `video/explainer-production.mp4`. It adds 3-second Bot That Lyfe
   intro/outro screens, generated dramatic stingers, segmented OpenAI narration,
   animated evidence visuals, and an audible generated music bed.

5. For a 9:16 social teaser, run:

   ```bash
   npm run lab:short -- --run lab-assets/<slug>
   ```

   This creates `video/explainer-short-9x16.mp4`. The short-form rule is:
   maximum 45 seconds, target about 30 seconds, 3-6 second screen changes, and
   up to 12 seconds only when a scene has continuous animation.

6. Use `voiceover-draft.md` as a scratch narration pass, or run the older single-track OpenAI narration only for quick checks:

   ```bash
   npm run lab:narrate -- --run lab-assets/<slug>
   ```

7. Promote `video/explainer-production.mp4` into YouTube, LinkedIn, live briefings, or a client case-study deck. Use `video/explainer-short-9x16.mp4` on TikTok, Reels, Shorts, and other vertical feeds to pull viewers into the full briefing.

Do not ship the rough preview video if it contains placeholder map/spec slides. The directed renderer should skip placeholders until real, verified data is attached.

## Evidence Rule

The asset workflow does not invent new findings. It only renders structured
claims already present in the article. If a graph edge is marked `hypothesis`,
the visualization must preserve that uncertainty in the narration and final
presentation.

## Buyer-Facing Use

This workflow is designed for student, professor/PI, employer/recruiter,
founder, event-organizer, and university-department briefings. The public
article proves the reasoning. The lab assets make the system visible. A
private engagement can then add client-specific program, curriculum, or
partnership detail.

## Video Director Skill

Repo agents should use `.claude/skills/bot-lab-video-director/SKILL.md` when
making final videos from an existing lab-assets run. That skill captures the
production rules: no placeholder tool screens, reusable Bot That Lyfe bumpers,
scene-level narration, audible generated music, animated visuals, and vertical
short-form pacing.
