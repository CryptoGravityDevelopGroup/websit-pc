import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  })
  return (
    <div>404</div>
  )
}
