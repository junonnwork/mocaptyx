<div align="center">

# MOCAPTYX

### Capture motion. Create animation.

[日本語](README.md) / **English** · [English website](https://junonnwork.github.io/mocaptyx/en.html)

DIY cameras × Reflective markers × Full-body motion capture

**In development** · Tested on Windows · VMD / FBX / BVH · VMC

[Sample motions](#sample-motions) · [Features](#features) · [Equipment](#equipment) · [Release plans](#release-plans) · [Licensing](#licensing)

</div>

---

**MOCAPTYX is a project for capturing full-body movement with DIY cameras and reflective markers, then bringing that motion into character animation and creative work.**

Record your dance or performance, fit the motion to a character, and export it. We are building a workflow for creating animations and sharing motion data.

> [!NOTE]
> **Available now: project information, demonstration videos, sample motions, development updates, release plans, and our intended licensing policy.**
> The application source, distributable builds, DIY camera designs, and hand/finger options are being prepared for release.
> The finished app and camera kits are not yet available.

## See it in motion

### Fit recorded motion to a character

[![Original motion on the left in gray; retargeted motion on the right in blue](docs/assets/retarget-preview.jpg)](https://junonnwork.github.io/mocaptyx/en.html#retarget)

**[Watch the retargeting comparison · About 20 seconds](https://junonnwork.github.io/mocaptyx/en.html#retarget)** · [Open the MP4](https://junonnwork.github.io/mocaptyx/assets/retarget-preview.mp4)

The gray skeleton on the left is the original motion. The blue skeleton on the right shows the result fitted to a character’s proportions. This skeleton preview from the development build demonstrates retargeting with adjustments for leg length, hip height, and foot contact. About 20 seconds, at the original speed, with no audio.

Live VMC output can also adapt motion to a loaded avatar’s body proportions. See [automatic retargeting and fine-tuning](#fit-live-and-recorded-motion-to-a-3d-character).

### Compare live and recorded quality

[![Live quality on the left; recorded quality on the right](docs/assets/capture-comparison.jpg)](https://junonnwork.github.io/mocaptyx/en.html#comparison)

**[Watch the playback and comparison videos](https://junonnwork.github.io/mocaptyx/en.html)**

These recordings use the development build’s black-suit character, skeleton, and marker views. The left side uses the live solver; the right side uses the method for processing a recording for export. The clips compare the results and are not real-time processing benchmarks. Published clips have been edited for length and framing, with audio removed. The on-screen labels in these recordings are in Japanese.

Video files: [Recorded playback · 16 seconds](docs/assets/capture-playback.mp4) / [Live versus recorded quality · About 26 seconds](docs/assets/capture-comparison.mp4)

## Sample motions

**[Open the motion download folder on Google Drive](https://drive.google.com/drive/folders/1ADxN_OLeBSA81Pd95DQ9nzIN-Sr-NAs0?usp=sharing)**

Try motions captured and exported with MOCAPTYX: VMD, plus FBX and BVH exports for Unity and Unreal.

These files were exported from a development build and are already retargeted to a particular body shape. Check and adjust bone mapping, foot contact, and other details for your character.

## What we are building

- **Capture your own motion.** Record full-body movement with compatible cameras and reflective markers.
- **Work with it after recording.** Review takes, select a range, adjust proportions, retarget, and export.
- **Bring motion into your projects.** Use VMD, FBX, BVH, or VMC to connect with your creative tools.
- **Learn how it works and build your own setup.** Source code, camera designs, and setup documentation are planned for release with clearly stated terms.

An official application release on **Steam is planned**, with continued updates after release. Pricing and release dates have not been announced.

## Features

These features are **implemented and being tested in the current development environment**. The application itself is not included in this repository yet.

| Stage | Development features | Purpose |
|---|---|---|
| Setup | Wand-based camera calibration; floor and room orientation | Align multiple cameras in one coordinate space |
| Capture | Optical full-body tracking; live preview | Solve body motion from reflective markers |
| Recording | Record, save, and play back takes | Review captured movement |
| Reprocessing | Re-solve recorded data | Process selected recordings again |
| Adjustment | Retargeting, body-proportion adjustments, preview | Fit motion to a character |
| Controls | Range selection; cancellation of long jobs | Work on the parts you need and switch tasks |
| Export | VMD, FBX, BVH | Use motion in creative tools |
| Integration | VMC output | Drive avatars in compatible apps in real time |
| Preview | Simulation demo | Explore operation without camera hardware |

### Fit live and recorded motion to a 3D character

**Automatically retarget motion to a character’s skeleton and proportions.** Adjust for differences in hip height and leg length, and correct foot contact.

- **Live:** Send motion fitted to a loaded avatar to compatible apps over VMC.
- **Recorded:** Fit saved motion to a character, inspect the preview, and export VMD, FBX, or BVH.
- **Fine-tuning:** Adjust arm and elbow spread, shoulder and hip height, and stance width. Settings are saved per avatar.

A compatible humanoid skeleton is required. Some models need bone mapping or additional proportion adjustments.

### From capture to export

```text
Prepare cameras and reflective markers
        ↓
Calibrate the capture space
        ↓
Fit body proportions with a T-pose → Live preview and recording
        ↓
Review and select a range → Reprocess the recording if needed
        ↓
Retarget to a character and fine-tune
        ↓
Export as VMD / FBX / BVH
```

VMC is a separate output path for sending live motion to external applications.

### Output formats

| Format | Typical use | What to check |
|---|---|---|
| **VMD** | MMD animation and motion sharing | Model bone structure, facing direction, feet, and contact |
| **FBX** | Animation and game production | Target skeleton, units, and coordinate system |
| **BVH** | Motion interchange | Target proportions and bone mapping |
| **VMC** | Live streaming to compatible apps | Receiver settings and avatar adjustments |

The development build includes export settings for Unity and Unreal. Results vary across models and tools; check and adjust the motion in your target environment.

### Live-quality output and recorded re-export

Output generated after stopping a recording is stored separately from output generated by reprocessing the recorded data.

- **Live-quality output:** Uses motion solved during capture, for a first look at the result.
- **Recorded re-export:** Reprocesses saved data so you can refine the parts you need later.

Processing time depends on recording length, selected outputs, the model, and PC specifications. No fixed processing time or accuracy improvement is guaranteed.

## Equipment

| Item | Current requirements |
|---|---|
| PC | Primarily developed and tested on Windows; minimum and recommended specifications are being prepared |
| Cameras | A compatible optical camera setup; design, parts, and connection details are planned |
| Markers | Reflective body markers, with suitable placement and attachment |
| Capture space | Camera coverage of the body and a calibrated capture area |
| Creative tools | MMD, animation tools, VMC receivers, or other apps as needed |

**Connecting an arbitrary USB webcam alone does not provide the optical setup shown here.**
Camera count, connection methods, placement examples, and cost estimates will be documented as hardware testing and setup guides are completed.

## Development status

We are testing the full capture-to-export workflow, investigating issues in real recordings, and continuing to improve it.

| Area | Cases being investigated |
|---|---|
| Marker detection and tracking | Occlusion, unwanted reflections, and recovery after losing markers |
| T-pose and body solving | Recognition time, arm twist after recovery, and unnatural poses |
| PC load | Tracking, responsiveness, and recording stability under heavy workloads |
| Retargeting | Body-proportion differences, knee bending, foot direction, and contact |
| VMD | Facing direction, inward-pointing feet, and differences between models |
| Distribution and setup | Starting on other PCs, dependencies, license notices, and setup instructions |

> [!IMPORTANT]
> This is a development build. Accuracy and speed depend on camera placement, marker visibility and attachment, lighting, PC specifications, and other conditions.
> Listed features should not be read as finished features validated in every environment.

## Release plans

| Item | Status | Planned contents |
|---|---|---|
| **Project information** | Published first | This README, features, development status, plans, and intended licensing policy |
| **Application source** | Planned | Selected source code, build/setup instructions, and final terms |
| **DIY cameras** | Planned | PCB and enclosure designs, parts lists, assembly and setup instructions |
| **Hand/finger options** | Planned | Hardware configuration, supported scope, setup, and integration |
| **Official application** | Steam release planned | A packaged distribution; date, price, and contents are not yet announced |
| **Guides and samples** | Being prepared in stages | Setup and capture examples, adjustment guides, usage examples, and other options |

Materials will be released with their terms after testing and rights checks. Dates, order, and specifications may change. The detailed [roadmap is currently in Japanese](ROADMAP.md).

## Licensing

We intend to allow you to share, sell, and monetize motions and videos you capture yourself, without restrictions from MOCAPTYX. We are also preparing to make the source available for learning and modification, and camera designs available for building cameras for your own use.

Selling or embedding MOCAPTYX itself, or selling cameras or kits, will require a separate paid license. For commercial licensing or a license buyout, [get in touch by email](mailto:junonn.work@gmail.com).

Final terms will accompany each release. Third-party models, music, and other materials retain their own terms. This planned code release is **source available**, not an OSI open-source license, because commercialization will be restricted. [Read the licensing policy](https://junonnwork.github.io/mocaptyx/licensing-en.html).

## Frequently asked questions

<details>
<summary><strong>Can I download and use the app now?</strong></summary>

Not yet. This repository provides project information, demonstration videos, and links to sample motions. The app, source code, and fabrication data are not included. Setup instructions, supported environments, and final terms will be provided at release.

</details>

<details>
<summary><strong>Will camera and hand/finger option data be released?</strong></summary>

That is the plan. Camera materials will include PCB and enclosure designs, parts lists, and assembly information. Hand/finger materials will cover configuration, supported scope, and integration. Release dates and final specifications have not been set.

</details>

<details>
<summary><strong>Can I distribute or sell motions I create?</strong></summary>

Our intended policy allows you to share, sell, and monetize motions and videos you capture or create yourself. Rights concerning third-party models, music, and people being recorded must be checked separately. Final terms will be stated at release.

</details>

<details>
<summary><strong>How will the source release differ from the Steam version?</strong></summary>

The source release is intended for learning, testing, and modification. Steam is the planned distribution platform for the official app. Exact contents, pricing, and support are not yet decided. Because commercialization will be restricted, we describe it as source available rather than open source.

</details>

## Updates and feedback

See the [changelog](CHANGELOG.md) and [roadmap](ROADMAP.md) for updates and plans; these documents are currently in Japanese.

Issues are welcome. For bug reports, include your environment, steps to reproduce, expected behavior, and actual behavior. Do not post personal information, private recordings, passwords, or confidential commercial information.

---

MOCAPTYX · by junonnwork · In development · Updated: 2026-10-15
