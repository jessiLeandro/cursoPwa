import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
   const { avatarImage } = useStaticQuery(
     graphql`
     query {
       avatarImage: file( relativePath: { eq: "icon-512x512.png"}) {
         childImageSharp {
           fluid(maxWidth: 100, maxHeight: 100) {
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
     `
   )

 return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid}/>
}

export default Avatar