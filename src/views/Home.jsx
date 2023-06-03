import React from 'react';
import DanielRondonName from '../components/DanielRondonName';
import LineL from '../components/LineL';
import LineR from '../components/LineR';

export default function Home() {
  return (
    
  <div className="page_container">
      <div className="lines_name_container">

        <div className="l_vert_line_container">
          <LineL />
        </div>

        <div className="r_vert_line_container">
          <LineR />
        </div>

        <div className='font_gruppo'>
          <DanielRondonName />
        </div>
      </div>
    </div>
  )
}
