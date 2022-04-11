import React from 'react'
import Header from '../Header/Header'

export default function HomePage() {
  return (
    <div>
        <div>
        <Header />
        </div>
        <div>
            <div>
              <h3>Только для тебя</h3>
              <div className='listForYou'>
                  ------------
              </div>
            </div>
            <div>
              <h3>Любимые треки</h3>
              <div className='favorite_tracks'>
                  ------------
              </div>
            </div>
        </div>
        
    </div>
  )
}
