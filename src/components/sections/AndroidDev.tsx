import React from 'react';
import { SmartphoneIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectItem } from '../ui/ProjectItem';
export function AndroidDev() {
  return <div>
      <SectionTitle icon={<SmartphoneIcon size={20} />}>
        Android Development
      </SectionTitle>
      <div className="mt-4 space-y-6">
        <ProjectItem title="Animus - Cryptography Based Social Media App" link="https://github.com/s0oraj/Animus" repo="https://github.com/s0oraj/animus" technologies="Android Studio, Java, OpenCV, E2EE, AES, Alan-AI" points={['Utilized Advanced Encryption Standard (AES) algorithm to make chats End-to-End Encrypted (E2EE)', 'Pioneered an in-app AI Voice Assistant allowing users to navigate the app using voice commands, via Alan-AI', 'Created Avatar Creator using Google ML Kit and OpenCV for image segmentation and cartoonization']} />
        <ProjectItem title="SangeetAI - Emotion-Based Music Recommender" link="https://github.com/s0oraj/SangeetAI" repo="https://github.com/s0oraj/SangeetAI" technologies="Python, TensorFlow Lite, VGG19, Android Java" points={['Built VGG19 CNN model with transfer learning on 35K+ FER2013 images for 7-class emotion detection, achieving optimized mobile inference through TensorFlow Lite conversion', 'Implemented complete ML pipeline from Kaggle API to Android deployment with augmentation (rotation/flip), normalization, and Adam optimizer with early stopping', 'Developed Android app using CameraView and JCPlayer for real-time emotion-based music recommendations']} />
      </div>
    </div>;
}