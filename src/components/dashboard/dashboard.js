import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import wittoken from '../../key_secret/wit';
import ChatBubble from 'react-chat-bubble';
import {cloneDeep} from 'lodash'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages :
    [
      {
        "type" : 0,
        "image": "data:image/png;base64,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",
        "text": "Hello! Good Morning!"
      }, 
     {
        "type": 1,
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEVxw67////9/f2Xl5dnv6ne8OvT6uRfvaXh8u5rwav1+vllv6iJzLqi1sj6/fyOjo6q2MvR0dF6xrLs9vOcnJyU0MDI5d3o6Oiqqqq23tO8vLyNzbyEyrfV1dWf1Mb4+PjGxsbe3t6x3NHK5t+mpqaKioqzs7OWe6ofAAALU0lEQVR4nO2da3ebuhKGkS0MQrbjQiClUDt19un//4kHMGAMGl1gFKCLd61+2FnZk3l0RxqNHPKvy5nbAevaCNevjXD92gjXr41w/doI16+NEFHnKPJd1/X9KDh/31/9FsLokJ6ykDFKOS//ccpYGF8SN/iGP26bMDikWcnFnIFY8XMnTq1j2iT006yotyHbCyZ14iSy6IQ9wugeUlHViShZntirSTuE56/c06JrRL3YteKJHcIgdbgJ3qMmeZ5YGWLxCc93R973QPEwQffGAmHKjJpnn/GA7Q82oRuOrL9GXow95qAS7i7m/a8vxpCbKiZhNLUCH6Ix6oiDSPiFwleIOZhLADzCdHoLbcURBxw0whMiYIGI1xmxCHEBMRGRCLEBi2njC8czJELMPtiIIi1UUQhdDx+wEM7cj0EYTFinScRyBN9wCGM7hA5PEZzDIDxY6IQPMYyZH4EwtAXosNN07xAIE2tVWIynCJU4ndBeFRaVeFkAoWuxCotKnIHQP6SXU0e5TUCHxd2/dbqkB98m4c69554n3N79JpW7yF5+d3dWCKM05POxdcV4mOoPQbqEwYlhfeBiiLKT7ppOkzCdsWmKxajmikeLEGkDBlk01GqqOoRfVieECeI635AahPelAhaIdwzC0xJbaCOqXrkqCRE2eW2KK9d1KkKb62oUKbesFIR2V50o4or9HDnheW73tSQ/BJATXpc2z4vEruMJfTt7aNjypN8bUkK7X0Z4km7KyQgPS54Ju6KygxwZoa1dQnSxeBxhtPyZohGXrMElhOlaGmnRTCVfUhLCtYwzpSRjDUwYrKeRFs0U/uKHCe1t1luQ5FgcJkzXMpKWYvCHIkwYz+21keD5Aia0uVuPr3AE4dw+G2oE4Zq6YdERRxCuZ74vBR/hbIQaYpS+xpQyzQBvgZ2X/zaxY4+Q0/yUuFEQnFsFkZucjoog/YGH9Hgp7XTMVHZyqrfwsETIvDyJqpOuXVfVD4LkqB3MzrwsCQA7UaIVFG+FkPGr33fqxb3opHUcx/gpktu5qu3YIORxBLrVeBdc1W2MXwOVGRLFKjs6hOfeppzisotzUPFVzrm53A7NXR0z5ODIq7FH2IF5EJ6TrFikHS+RLiGPVQXf+La7yDbsvMtO004gr8YuYXQ5Fsu4rL6+URGm9cDHupHyMkKe6vlV+SY5GOCJgR1pAOSTMIjrkYk+vvxLwk7pMOZrEJo4VrZUqIExnRaqVVRPQr8zN/P4QRi/sLSxZDAh/zJxrHDNF7vGfUM7kqPahjB6KU0al4T9kglVhGY1WLkmDED1jGqwsgPXYkPY++YrfHXO/SbUHFdBhPRu6pjYNfOCKuzcQa8eTg/+Djs7w7+dSwnZ0dyxwrXBGQ+7jrJzBPp0TTjYH+SJcx3+ciQljMZ4thue0wVjzPT6WZ8wGjp9dYabFfWRo5iQjmhblWu9rTt+GGknAfyqfBYc6Io2Y+pzDrGlcJxjhWvZi51stB3x/tGDUPMsSUY4tujLKaM7nnqGE0XHjngfF43QGetY4Vr3KGt0FRZ2xE4jEY4Z4VvPOoU/vilAkyIWIRs1ANY6P3tQeJ5gR3i9A4mQxeOLvij8S+Mau0yyIzq5RSKc0kjLtVtjkhqv117siJopVh2Om+0bBa2hKY1dPOsjEU7qPoVrzZoqn1RQ3Q6NTThhjK8IT7Wd00Q72dA1HEI21bN6xTV25dfaOQ2bKQ4hNdi7EHpWz4hTZsPKjiCGAonQ8Nt+4Fm9MOaThtLyW98W4eSyr5emnj/JjHBpilSHEwl3aITWWulGuBFuhBvhRrgRboQbYesA+FuGhASwNCth6dTtNgyrMCd8WloSIdl9fP583+/ff/76cxP8rj4huf359bD0+TFgnI2QkB/vb2/7h972n0NGXUJy+9y3ht7ef/TjbGYiJB/vjVe1b7/7pa9JSH73DL1/vBiaiZD8eHWr9OxvL9BCi5Ds/g4t/egamoeQfA7cKhz7OYJw91Nk6bNjaRZCQQ0+avHl/9AhJMMa7NfiHITkQ+hWv3lpEAJFVVh69sVZCP8Tu1WoO6KqCckNANzv/5uTkPwB/Xr7ZUb4Cyyqtz+NpTkI30G/9m+dSlQSkhtsaP8+HyG5/U9C+NuE8DfYGDo9cQZCaHSo9NeE8K/EUDtq2SOEdoSlfu33zxGiDv6Cw71kzf1ZVqL4NqQ6BE5UJCNpWfTP31OfW8gaw75ZP4hiapDOnoCINnnJ/+/W/l59eAsfJcs69HO+IHfw7EkUxDC8Kcp9gNABjvG1CWvPoJLSJhRcqwNjonJneBbHAogQOLtVtNJnP2w8g09a9Vqp4P7ug3AYpsFOzrBiMwIRMnFwt2SaLvUkbA1NG2mCoWdNbOLgdJgfnEGcmOeChEAMheZsQfw2FgOK+dKaLZ4xHUPCQahuSJx+72xv74vqUBwHoznjP49uwcNkrRn/GZczJOzH2hTDttNLAszCHUwIBWPordo6TQjqiFqrNlEoRku4C7uIZY7XMlY/fV66oVl7FUMY1wY0U52VdzdHA4cCczRW3uKsQG2s/jlrHWdVEtvqvoWbVckQKXc6KYmEcW3QfKHx9dSdxcD5QlKJz7kCjmurlDicVikWs2pEqW8FRek1i++H7sUg4fLAExe+zhfwS8g8g2KPlF/AJBLewenemTkf7nF2bVIrmt7sgipRuYvxGmYPB/yrdjGAW/R4d9egWyCqnah+EgoO3psi0p0o6HYK4u08KCZNsZvY7z1wIKd8NxHKR4JICF7qIh97eEd4GOQDhx+RwY7w/uM5pwK3ZjBvWIJfd/1d/c52sOgiBIVDOckO2NWH89uj3iGFXSMEOJkRTtKyWE7xyYyooGwQOiF8u5JUZ2I38npiQXLRFMakYaaFiVvvdI0EcK4OXEImQdwNT0jJDrisxI5n+XFdr5yCEL4pi3zTuXzqRuraq2PCGqzs5Jp3bSs7kewqMPpdbqZ9pE9ciWPM0Q7EJAfpVWf82+pl3lAdv1QZw8q7ulp2FHlULdzHZ0x9XV3nlTIauhp2DqrX3KzkVOBHOSMhfqyTWrJ6+lDOd1QmLrCUF4M/3p4UuxV8HTVTkzB6/ALsFD8Nklwj+Ye13CaUHVN/mOV+5yeZUQ53yrJEYOfsp0c9Ozbz0zCPO8fr6dLodM0c7png1T4WdrKBHd30KNZzDLGujOEQ7GxZlDbC5Wsj3AiXr41wI1y+NsKNcPnaCG0R6iTAZChvnc1DSMM0CtQ6KJMiLpXQSyXXZ142Ktx1EhrkFUB4z2YGQqO0btNfmpiB0CxLiDBGZtmEcHQeUIlTm8y3E5om2TlPfE1jBkLDZD0km9ZM5yA0AgTigJZMaJybdH2t1CyXDZjxcbmEhrmgoISPSyY0S8U7yBO7AkKTnkimjqQzrbyZ+nC3Bgymv382z9fTI+++UkGqyLe+XMLi49bJjyqFHOVbex7CbxT/5wnH1OG//1bQv/+i1ZoeB5Q9DwgTruKl3Fbwi7kw4eLfq+6Kw49YwoRgwPES5cFPV0te6VxTK4WHUhnhah7LlT+XKyGUvAiyNBWfamMI1/Gw+kOS59VlbzpP3aX9NrGLhEJGOHWX9ttEJU86y99WX0klSqtQTnhex1jDJb1QQbiOdQ1PpAxywjXMidKn49WEwitZy1IobaNKwulHl7YlHUd1CJe+AJcsuXUJxdfflyKuBNQgJD7CdqYdMUdjQ1aDkATZMquRZ4HaeS3Cl7wSixGTfNebE5aPuS6LkVVP2SISFgNObPhKs01RGquHGFPCMndGOOI6E76oF6aa9WdIWEImccgo53QeFX+YhXFigGdM+MD03bnkm8GNJVyZNsL1ayNcvzbC9WsjXL82wvVrI1y//g8ZZPop2viI/wAAAABJRU5ErkJggg==",
        "text": "Hello! Good Afternoon!"
      },
      {
        "type": 0,
        "image": "data:image/png;base64,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",
        "text": "Hello! DMM!"
      }
]
    }
  }

  componentDidMount() {

// make a request
fetch(
    'https://api.wit.ai/message?v=20181124&q=hello',
    {
      method: 'GET',
      headers: {Authorization: `Bearer ${wittoken}`}
    }
    )
    .then(response => response.json())
    .then(json => console.log(json));
      }
    
      pushMSG = () => {
        const tem = cloneDeep(this.state.messages);
        tem.push({
          "type": 1,
          "image": "data:image/png;base64,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",
          "text": "Hello! Good Afternoon!"
        })
        this.setState({
          messages:tem
        })

      }

  render() {
    const {messages}= this.state
    return (
      <div>
         <ChatBubble messages = {messages} />
         <input type="text"/>
         <button onClick={this.pushMSG}>Button</button>
      </div>
     
    );
  }
}

const styles = {
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);