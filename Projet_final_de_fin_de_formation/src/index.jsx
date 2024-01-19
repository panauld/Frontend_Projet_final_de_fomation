import React from 'react'
import { createRoot } from 'react-dom/client'

import ApplicationContainer from 'container/application-container'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
    <div>
        <ApplicationContainer />
    </div>
)
