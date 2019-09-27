import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import getThemeColor from "../../utils/getThemeColor"
import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
    const {
            site: {
                siteMetadata: { title, description, position}
            }
        } = useStaticQuery(graphql`
            query MySteMetadata {
                site {
                siteMetadata {
                    title
                    description
                    position
                }
                }
            }
        `)

    return (
        <S.ProfileWrapper> 
             <S.ProfileLink
                to="/"
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
            >
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

// const Profile = () => (
//     <StaticQuery
//         query={graphql`
//             query MySteMetadata {
//                 site {
//                 siteMetadata {
//                     title
//                     description
//                     position
//                 }
//                 }
//             }
//         `}

//         render={({
//             site: {
//                 siteMetadata: { title, description, position}
//             }
//         }) => (
//             <div className='Profile-wrapper'>
//                 <h1>{title}</h1>
//                 <h2>{position}</h2>
//                 <p>{description}</p>
//             </div>
//         )}
//     />
// )

export default Profile