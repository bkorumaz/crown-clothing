import React from 'react'
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"
import { useSelector}  from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { DirectoryMenu } from "./directory.styles";

function Directory (props) {
    const sections = useSelector(state => selectDirectorySections(state));

    return (
        <DirectoryMenu>
              {sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))}
        </DirectoryMenu>
    )
}


export default Directory