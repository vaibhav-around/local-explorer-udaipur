# 🌊 LakeCity AI - Smart City Explorer (Udaipur)

**LakeCity AI** is a sustainable tourism platform built for the Google Lakecity Hackathon 2026. It leverages **Google Gemini AI** and **Google Maps Platform** to turn crowdsourced data into personalized, eco-friendly exploration plans for Udaipur.

## 🚀 The Vision

Udaipur’s "Hidden Gems" often go unnoticed while main attractions become overcrowded. **LakeCity AI** solves this by:

* **AI-Driven Itineraries:** Using Gemini to plan routes based on real-time vibes, budget, and time.
* **Smart Proximity:** A custom Geolocation engine that calculates distance to Udaipur landmarks.
* **Sustainability First:** Redirecting foot traffic to lesser-known spots to preserve the city's heritage.

## 🛠️ Tech Stack

* **Frontend:** Next.js 15 (App Router), Tailwind CSS, shadcn/ui.
* **AI:** Google Gemini API (`gemini-1.5-flash`).
* **Maps:** Google Maps JavaScript API & Geolocation API.
* **Logic:** Custom Haversine formula for distance sorting.

## 📁 Project Structure

```text
src/
├── app/            # Next.js Routes & AI API Endpoints
├── components/     # UI Components (Shadcn + Custom Bars)
├── hooks/          # useGeolocation.ts (The heart of our local search)
├── lib/            # utils.ts (Distance calculation logic)
└── data/           # Udaipur Mock Data (Badi Lake, Ambrai Ghat, etc.)

```

## ⚙️ Getting Started

### 1. Prerequisites

Ensure you have **Node.js 18+** and **npm** installed.

### 2. Setup Environment Variables

Create a `.env.local` file in the root:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
GEMINI_API_KEY=your_key_here

```

### 3. Installation

```bash
npm install
npm run dev

```

The app will be live at `http://localhost:3000`.

## 🤝 For the Team

* **Branching:** Please work on `dev` or feature branches. Do not push directly to `master` without a review.
* **SSH Setup:** Ensure your SSH agent is running (`eval "$(ssh-agent -s)"`) before pushing.
