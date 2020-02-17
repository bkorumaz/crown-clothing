import React, {useState} from 'react'
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"

function Directory (props) {
    const [sections, setSections] = useState([
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens', //https://i.ibb.co/R70vBrQ/men.png
          imageUrl: 'https://lh3.googleusercontent.com/proxy/fUa1M6cuB-EpF7wooZyqfGWe2y-9Uc0xXfsWn6Bz9mwGZN2VkFGVVS9gOR1y0EVMM4maf6ue3U3TasEz_eFMndWcMnWz1eQ80CW23IpgDLzDxJr0LXl0zFVBmqimNFIBknCNOp3FwLkH2TFW1izzUF6zYB6Xvgeh_2w', 
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
      );

    return (
        <div className="directory-menu">
              {sections.map(({title, imageUrl, id}) => (<MenuItem key={id} title={title} imageUrl={imageUrl}/>))}
        </div>
    )
}


export default Directory