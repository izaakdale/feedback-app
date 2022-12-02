import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>About this project</h1>
            <p>
                React app to leave feedback and a rating on the product.
            </p>
            <p>Version 1.0.0</p>
            <p>
                <Link to='/'>back home</Link>
            </p>
        </div>
    </Card>
  )
}
