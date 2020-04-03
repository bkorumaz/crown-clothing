import React from 'react'
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"
import { useSelector}  from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

function Directory (props) {
    const sections = useSelector(state => selectDirectorySections(state));

    return (
        <div className="directory-menu">
              {sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))}
        </div>
    )
}


export default Directory