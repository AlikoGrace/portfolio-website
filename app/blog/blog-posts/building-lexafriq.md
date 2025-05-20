---
title: "Building LexAfriq: Accessible AI for Early Dyslexia Screening in African Classrooms"
date: "2024-05-17"
readTime: "7 min read"
tags: ["Machine Learning", "Android", "Research", "Social Impact"]
slug: "building-lexafriq"
---

## Introduction

In many parts of Sub-Saharan Africa, children with dyslexia go undiagnosed due to a lack of resources, trained specialists, and culturally relevant tools. LexAfriq was born from a desire to change that — a mobile-first, machine learning-powered app designed to pre-screen children for dyslexia using nothing more than a smartphone.

## Why Dyslexia? Why Africa?

While dyslexia is widely studied in Western contexts, early detection tools are almost non-existent in many African classrooms. Teachers may notice a child is struggling, but lack the means to identify why. This gap in accessibility and awareness motivated us to build a tool tailored to the African context — no expensive hardware, no clinical supervision required.

## Designing a Multimodal Screening System

LexAfriq uses three main inputs to assess early signs of dyslexia:

- **Handwriting analysis**: Children trace letters on the screen. A CNN-based model evaluates shape consistency and pressure.
- **Eye-tracking**: Using the phone's camera and OpenCV+Dlib, we monitor fixations, regressions, and saccades during short reading tasks.
- **Gamified cognitive tests**: Inspired by the Stroop test, these measure executive function in a child-friendly interface.

All tasks are delivered as part of an interactive experience — children don’t even realize they are being screened. The game-like design ensures natural behavior and more reliable results.

## The Technical Stack

- **Android (Java)** for the mobile app
- **TensorFlow Lite** for lightweight on-device inference
- **OpenCV + Dlib** for eye tracking
- **Python** for training the models
- **SQLite** for local storage

## Results

- **96% accuracy** in handwriting classification
- **90.2% sensitivity** in eye-tracking module
- **89.2% performance** from the game-based assessments

All evaluations were conducted using annotated data and simulated classroom conditions.

## What We Learned

- Designing for **low-resource environments** means building for availability, not just accuracy
- Making the experience **invisible to the child** improves reliability and removes pressure
- ML models are only as useful as their deployment context allows — mobile UX matters

## What's Next

- Preparing the first academic paper submission (currently in draft)
- Planning pilot deployments in Ghanaian schools
- Exploring support for multiple local languages and auditory feedback

## Screenshots & Demo

> _\[Insert screenshots of app UI: handwriting task, eye-tracking interface, game screen]_ > _\[Optional: embedded video or GIF demo]_

## Final Thoughts

LexAfriq isn’t just a tool — it’s a step toward **equitable AI in education**, designed with context in mind. If you're working on low-resource AI, accessible EdTech, or educational research in Africa, I’d love to connect.

_Interested in collaborating or learning more? [Get in touch](/contact)_
