import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import BilliardsScorekeeper from './BilliardsScorekeeper';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BilliardsScorekeeper initialPlayer1Score={0} initialPlayer2Score={0}   />
  </StrictMode>,
)
