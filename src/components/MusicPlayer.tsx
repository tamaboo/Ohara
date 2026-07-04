"use client";

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Volume1, Plus, Minus } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Volume default 50%
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fungsi untuk mengatur volume (+0.1 atau -0.1)
  const adjustVolume = (direction: 'up' | 'down') => {
    if (audioRef.current) {
      let newVolume = direction === 'up' ? volume + 0.1 : volume - 0.1;
      // Batasi volume antara 0 dan 1
      newVolume = Math.min(Math.max(newVolume, 0), 1);
      
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-2 rounded-full border border-slate-700 shadow-xl">
      <audio ref={audioRef} src="/Music/backsound.mp3" loop />
      
      {/* Tombol Play/Pause */}
      <button 
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full text-white hover:bg-emerald-500 transition-colors"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
      </button>

      {/* Kontrol Volume */}
      <div className="flex items-center gap-1 px-2">
        <button 
          onClick={() => adjustVolume('down')}
          className="text-slate-400 hover:text-white p-1"
        >
          <Minus size={14} />
        </button>
        
        <Volume1 size={16} className="text-emerald-500" />
        
        <button 
          onClick={() => adjustVolume('up')}
          className="text-slate-400 hover:text-white p-1"
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="text-[10px] font-semibold text-slate-300 pr-3">
        {Math.round(volume * 100)}%
      </div>
    </div>
  );
}