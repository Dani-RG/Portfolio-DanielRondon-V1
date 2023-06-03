import React from 'react';
import DanielRondonName from '../components/DanielRondonName';
import LineL from '../components/LineL';
import LineR from '../components/LineR';

export default function Home() {
  return (
    <div className="page_container">
      <div className="line_text_container">
        <LineL />
        <LineR />
        <DanielRondonName />
      </div>
    </div>
  )
}
