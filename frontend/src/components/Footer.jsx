import React from 'react'

function Footer() {
  return (
<footer className="footer mt-auto py-3">
      <div className="container text-center">
        <span>© {new Date().getFullYear()} Electric Bill Reminder App. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer