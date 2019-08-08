import React from 'react'

const Fetching = () => {
  fetch('../cv.docx')
  .then(res => res.json())
  
}

export default Fetching