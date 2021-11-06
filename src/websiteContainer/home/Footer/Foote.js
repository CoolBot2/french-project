import React from 'react'
import './Footer.css'
const Foote = () => {
  return (
    <div className='footer-container'>
      <div style={{display: 'flex',
alignItems: 'center',
alignContent:' center'}} className='footer-parent'>
        
        <a style={{marginLeft: '30px',
marginRight: '20px',
}} href="">Saisine par voie électronique</a >
        <a style={{marginLeft: '30px',
marginRight: '20px',
}} href="">Contacter le webmestre</a>
        <a style={{marginLeft: '30px',
marginRight: '20px',
}} href="">Plan du site</a >
        <a style={{marginLeft: '30px',
marginRight: '20px',
}} href="">Explorer la ville</a  >
        <a style={{marginLeft: '30px',
marginRight: '20px',
}} href="">Mentions légales</a >
        <a style={{marginLeft: '30px',
marginRight: '20px',
}} href="">Espace Presse</a >
        <a style={{marginLeft: '30px',
marginRight: '20px', border:'none'
}} href="">Accessibilité</a >






      </div>
    </div>
  )
}
export default Foote
