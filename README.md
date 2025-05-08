# Image Upload & Sentiment-Based Recommendation System

This project is the culmination of over two years of design, machine learning, and user experience iteration. It began as an idea my brother came up with, and we co-developed it together to explore how image-based platforms can adapt to user sentiment in real time.

## 👥 Team

* **Lead Developer & Designer**: \[Your Name]
* **Co-Developer & Original Ideator**: My brother (shoutout for the spark that started it all!)

## 🔍 Overview

This platform is a lightweight, real-time recommendation system that combines:

* **Image Uploading**
* **User Sentiment Tracking via Time-on-Image**
* **Feature Extraction using CNNs**
* **Clustering via K-Means**
* **ML-Powered Feed Personalization**

We use a queue system to limit uploads to three images at a time, extract features, then trigger clustering for similar content and relevance updates.

## 🧠 Key Features

1. **Upload Queue**

   * Users can upload up to 3 images.
   * Each image is processed, features extracted, and clustered.

2. **Short-Term Sentiment Scoring (A/B Testing)**

   * Images are rated based on user interaction time.
   * Score range: -0.95 to +0.95.
   * The system adapts to recent user behavior.

3. **Recommendation Engine**

   * Uses highest-rated images as input.
   * CNN extracts features → K-means finds related tags.
   * Returns 9 visually or contextually similar items.

## 🎯 Use Case

We designed this for applications like:

* Mood-based photo curation
* Lightweight visual feed personalization
* Sentiment-driven discovery systems

## 🚧 Status

Currently in alpha, polishing the front-end, feedback loops, and clustering calibration.

## 🧰 Tech Stack

* React / Expo (Frontend)
* Python / Flask (Backend APIs)
* TensorFlow / PyTorch (Feature extraction)
* Scikit-learn (Clustering)
* MySQL (Storage)

##🔗 Related Repositories
mk-001 – Backend API (Django) https://github.com/kidmpukane/mk-001-backend-practice
