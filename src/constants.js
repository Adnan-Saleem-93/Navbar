import React from 'react'
import {FaBehance, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
export const NavLinks = [
  {
    id: 1,
    url: '/about',
    text: 'about'
  },
  {
    id: 2,
    url: '/projects',
    text: 'projects'
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact'
  },
  {
    id: 4,
    url: '/profile',
    text: 'profile'
  }
]

export const SocialMedia = [
  {
    id: 1,
    url: 'https://www.facebook.com/',
    icon: <FaFacebook />,
    title: 'Facebook'
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
    title: 'Twitter'
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
    title: 'LinkedIn'
  },
  {
    id: 4,
    url: 'https://www.behance.net',
    icon: <FaBehance />,
    title: 'Behance'
  }
]
